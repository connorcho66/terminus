import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../utils/queries";
// import CartItem from "../CartItem";
import Auth from "../utils/Auth";
import { useStoreContext } from "../utils/ShopContext";
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../utils/actions";
import { useShopContext } from "../utils/ShopContext";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const Cart = () => {
  const [state, dispatch] = useShopContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  //calculates total
  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      productIds.push(item._id);
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        <span role="img" aria-label="trash">
          🛒
        </span>
      </div>
    );
  } else {
    return (
      <span role="img" aria-label="trash">
        <div className="close" onClick={toggleCart}>
          [close]
        </div>
        {state.cart.map((item, index) => (
          <p key={index}>{item.name}</p>
        ))}
        Total ${calculateTotal()}
        <button onClick={submitCheckout}>Checkout</button>
      </span>
    );
  }
};

export default Cart;