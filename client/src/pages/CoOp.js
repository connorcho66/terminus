import React from 'react';
import Nav from '../components/Nav';
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Box,
} from '@chakra-ui/react';

export default function CoOp(){
    return(
      <>
        <Nav />
        <Box
        as="main"
        height="100vh"
        padding="1rem"
        backgroundColor="RGBA(0, 0, 0, 0.80)"
        >
          <Text
            fontFamily={'h1'}
            color='white'
            align={'center'}
            fontSize={{ base: '13px', sm: '20px', md: '30px', lg: '60px' }}
            >Co-Op is coming in the future</Text>
        </Box>
      </>
    )
}