import { useQuery } from "@apollo/client";
import React from "react";
import { QUERY_ALL_PRODUCTS } from "../utils/queries";
import ProductList from '../components/ProductList'

// import {
//     Stack,
//     Flex,
//     Button,
//     Text,
//     VStack,
//     useBreakpointValue,
//   } from '@chakra-ui/react';
const Shop = () => {
  const { loading, data, error } = useQuery(QUERY_ALL_PRODUCTS);

  const products = data?.products || [];

  if(error){
    console.log(error);
  }
  return (
    <main>
      <h1>Shop</h1>
      {loading ? (<div>Loading...</div>) : (
        <ProductList products={products} />
      )}
    </main>
  );
};

export default Shop
