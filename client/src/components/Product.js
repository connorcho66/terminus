import React from "react";
import { Box, Image, Button, SimpleGrid } from "@chakra-ui/react";
import { useShopContext } from "../utils/ShopContext";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../utils/actions";

export default function Product({ product }) {
  // const [state, dispatch] = useShopContext()

  return (
    <Box color={"white"} padding='1rem' borderWidth="1px">
      {/* Cart: {state.cart.length} */}
      <Image src={product.image} />
      {product.name}
      <Box
        mt="1"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        isTruncated
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
        <Button bg={"red.800"} rounded={"full"} color={"white"} fontFamily="h2">
          Add To Cart
        </Button>
      </Box>
    </Box>
  );
}
