import React from "react";
import { Box, Image, Button, SimpleGrid } from "@chakra-ui/react";
import { useShopContext } from "../utils/ShopContext";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../utils/actions";

export default function Product({ product }) {
  const [state, dispatch] = useShopContext()


  const addItemToCart = () => {
    dispatch({
        type: ADD_TO_CART,
        product: {...product}
    }) 
  }

  return (
    <Box color={"white"} borderWidth="1px">
      <Image src={product.image} />
      {product.name}
      <Box
        mt="1"
        fontWeight="semibold"
      >
        {product.description}
      </Box>

      <Box color={"white"}>
        {product.stock}
        <Box as="span" color={"white"} fontSize="sm">
          {" "}
          in stock
        </Box>
        <Box color={"white"} fontSize="sm">
          $ {product.price}
        </Box>
        <Button onClick={addItemToCart} bg={"red.800"} rounded={"full"} color={"white"} fontFamily="h2">
          Add To Cart
        </Button>
      </Box>
    </Box>
  );
}
