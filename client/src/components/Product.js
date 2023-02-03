import React from "react";
import { Box, Image, Button, SimpleGrid, Text, VStack, Spacer } from "@chakra-ui/react";
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
    <Box color={"white"} borderWidth="3px" bg={'browns.400'} borderColor={'browns.300'} borderRadius='7px'>
      {/* Cart: {state.cart.length} */}
       <Box bg={'browns.300'} display={'flex'} justifyContent={'center'}>
        <Image 
          src={product.image}
          boxSize={{base: '250px', sm: '250px', md: '350px', lg: '400px' }}
          // borderWidth='2px'
          borderRadiusTop={'7px'}
          mt='2'
          // objectPosition='50% 50%'
          />
        </Box>
       <Box bg={'browns.300'}>
        <Text 
          fontFamily='h2'
          textAlign={'center'}
          fontSize={{ base: '17px', sm: '25px', md: '25px', lg: '25px' }}
          >{product.name}</Text>
        </Box> 
       <Box>
        <Text
          mt='2'
          mb='2'
          fontFamily='h3'
          textAlign={'center'}
          color={'greys.200'}
          >{product.description}</Text>
       </Box>

      <Box color={"white"}>
        {/* {product.stock}
        <Box as="span" color={"white"} fontSize="sm">
          {" "}
          in stock
        </Box> */}
        <VStack justify={'center'}>
          <Box display={'Flex'}>
            <Text 
              color={"white"} 
              fontSize={{ base: '17px', sm: '20px', md: '20px', lg: '20px' }}
              fontFamily='h2'
              // ml={{ base:'3', sm: '3', md: '6', lg: '10' }}
              alignSelf={'flex-end'}>
              ${product.price}</Text>
          </Box>
          <Button 
            onClick={addItemToCart}
            bg={"red.800"} 
            rounded={"full"} 
            color={"white"}
            _hover={{ bg: 'red.700' }}
            _focus={{ boxShadow: 'BlackAlpha.600'}} 
            fontFamily="h2"
            mb='2'>
            Add To Cart
          </Button>
        </VStack>
        <Spacer h='7px' />
      </Box>
    </Box>
  );
}
