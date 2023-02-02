import { useQuery } from "@apollo/client";
import React from "react";
import { QUERY_ALL_PRODUCTS } from "../utils/queries";
import ProductList from "../components/ProductList";
import { Box } from "@chakra-ui/react";
import Nav from "../components/Nav";
import Cart from '../components/Cart'

const Shop = () => {
  const { loading, data, error } = useQuery(QUERY_ALL_PRODUCTS);

  const products = data?.products || [];

  if (error) {
    console.log(error);
  }
  return (
    <>
      <Nav />
      <Cart />
      <Box as="main" padding="1rem" backgroundColor="RGBA(0, 0, 0, 0.80)">
        <h1>Shop:</h1>
        {loading ? <div>Loading...</div> : <ProductList products={products} />}
      </Box>
    </>
  );
};

export default Shop;
