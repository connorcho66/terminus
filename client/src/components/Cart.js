import React, { useEffect } from "react";
import { SlBasket } from 'react-icons/sl';
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../utils/queries";
// import CartItem from "../CartItem";
import Auth from "../utils/auth.js";
import { TOGGLE_CART} from "../utils/actions";
import { useShopContext } from "../utils/ShopContext";
import { 
  Box,
  Text } from "@chakra-ui/react";

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
      console.log(productIds);
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  if (!state.cartOpen) {
    return (
      <Box className="cart-closed" onClick={toggleCart} color={'red.800'} fontSize='40px' textAlign={'right'}>
        <SlBasket />
      </Box>
    );
  } 
  else {
    return (
      // Box el
      <span role="img" aria-label="trash">
        <div className="close" onClick={toggleCart}>
          [close]
        </div>
        {state.cart.map((item, index) => (
          <p key={index}>{item.name}</p>
          // divider component
        ))}
        {/* spacer */}

        {/* wrap in Box */}
        Total ${calculateTotal()}

        {Auth.loggedIn() ? (
        <button onClick={submitCheckout}>Checkout</button>
        ) : (
          // make Text el
        <h1>Please login</h1>)}
      </span> 
    );
  }
};

export default Cart;
