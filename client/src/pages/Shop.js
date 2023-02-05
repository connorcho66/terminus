import { useQuery } from "@apollo/client";
import React from "react";
import { QUERY_ALL_PRODUCTS } from "../utils/queries";
import ProductList from "../components/ProductList";
import { 
  Box,
  Text,
  HStack  } from "@chakra-ui/react";
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
      {/* <Cart /> */}
      <Box as="main" padding="1rem" backgroundColor="RGBA(0, 0, 0, 0.80)">
        <HStack>
          <Text
            fontFamily='h2'
            fontSize={{ base: '20px', sm: '30px', md: '55px', lg: '60px' }}
            color={'greys.200'}>Shop:</Text>
          <Text
            fontFamily='h2'
            fontSize={{ base: '13px', sm: '20px', md: '30px', lg: '45px' }}
            color={'greys.200'}
            pr={{ base:'2', sm:'2', md:'15', lg:'20' }}>Add to your Co-Op's Arsenal</Text>
            <Cart />
        </HStack>
        {loading ? <div>Loading...</div> : <ProductList products={products} />}
      </Box>
    </>
  );
};

export default Shop;
