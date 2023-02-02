import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_PRODUCTS } from "../utils/queries";
import { useShopContext } from "../utils/ShopContext";
import { UPDATE_PRODUCTS } from "../utils/actions";
import Product from "./Product";
import { SimpleGrid } from "@chakra-ui/react";

export default function ProductList() {
//   const [state, dispatch] = useShopContext();
  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);

//   useEffect(() => {
//     if (data) {
//       dispatch({
//         type: UPDATE_PRODUCTS,
//         products: data.products,
//       });
//     }
//   }, [data, loading, dispatch]);

  return (
    <SimpleGrid columns={{sm: 2, md: 3}} spacing={5}>
      {/* navbar here */}
      {data.products.length ? 
        data.products.map((product) => <Product key={product._id} product={product}/>)
       : <h2>No products here yet...</h2>}
    </SimpleGrid>
  );
}
