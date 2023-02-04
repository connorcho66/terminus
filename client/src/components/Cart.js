import React, { useEffect } from "react";
import { Link as ReactLink } from 'react-router-dom';
import { SlBasket } from "react-icons/sl";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../utils/queries";
// import CartItem from "../CartItem";
import Auth from "../utils/Auth.js";
import { REMOVE_FROM_CART, TOGGLE_CART } from "../utils/actions";
import { useShopContext } from "../utils/ShopContext";
import {
  Box,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Spacer,
  Divider,
  HStack,
  Link
} from "@chakra-ui/react";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const Cart = () => {
  const [state, dispatch] = useShopContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  const removeFromCart = (id) => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: id,
    });
  };

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  // function toggleCart() {
  //   dispatch({ type: TOGGLE_CART });
  // }

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
      // console.log(item);
      productIds.push(item._id);
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  // if (!state.cartOpen) {
  //   return (
  //     <Box className="cart-closed" onClick={toggleCart} color={'red.800'} fontSize='40px' textAlign={'right'}>
  //       <SlBasket />
  //     </Box>
  //   );
  // }
  // else {
  //   return (
  //     // Box el
  //     <span role="img" aria-label="trash">
  //       <div className="close" onClick={toggleCart}>
  //         [close]
  //       </div>
  //       {state.cart.map((item, index) => (
  //         <p key={index}>{item.name}</p>
  //         // divider component
  //       ))}
  //       {/* spacer */}

  //       {/* wrap in Box */}
  //       Total ${calculateTotal()}

  //       {Auth.loggedIn() ? (
  //       <button onClick={submitCheckout}>Checkout</button>
  //       ) : (
  //         // make Text el
  //       <h1>Please login</h1>)}
  //     </span>
  //   );
  // }

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Box
        ref={btnRef}
        onClick={onOpen}
        color={"red.800"}
        fontSize="40px"
        _hover={{ color: "red.700" }}
        textAlign={"right"}
      >
        <SlBasket />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={"greys.100"}>
          <DrawerCloseButton />
          <DrawerHeader>
            <Spacer h="20px" />
            <Text
              fontFamily="h2"
              bg={"red.800"}
              borderRadius="15px"
              textAlign={"center"}
              color={"white"}
              fontSize="30px"
            >
              Your Items
            </Text>
          </DrawerHeader>

          <DrawerBody bg={"greys.200"} borderRadius="15px" mr="5px" ml="5px">
            {state.cart.map((item, index) => (
              <><HStack spacing={'30'}>
                <Button
                  onClick={() => removeFromCart(item._id)}
                  fontFamily="h2"
                  mr='-5'
                  fontSize={{ base: '10', sm: '10', md: '13' }}
                  color={"greys.100"}
                  bg={"red.800"}
                  size='xs'
                  _hover={{ bg: "red.700" }}>
                  X</Button>
                <Text
                  key={index}
                  fontFamily='mono'
                  // mt="6"
                  ml='1'
                  fontSize={{ base: "18px", sm: "18px", md: "20px", lg: "20px" }}>
                  {item.name}</Text>
                
              </HStack>
              <Text 
                key={item} 
                fontFamily="h2" 
                textAlign={"right"} mt="-1">
                  ${item.price}
                  <Divider orientation="horizontal" />
                </Text>
                <Box h={{base:'3', sm:'10'}} /></>
            ))}
            <Spacer h="20" />
            <Text 
              fontFamily="h2"
              textAlign='right'>Total ${calculateTotal()}</Text>
          </DrawerBody>

          <DrawerFooter>
              <Button
                onClick={submitCheckout}
                fontFamily="h2"
                color={"greys.100"}
                bg={"red.800"}
                _hover={{ bg: "red.700" }}
              >
                Checkout
              </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
