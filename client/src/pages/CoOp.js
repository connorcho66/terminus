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
        backgroundColor="RGBA(0, 0, 0, 0.80)">
          <Box
            border='1px'
            borderColor='browns.200'
            borderRadius='lg'>
            <Text
              fontFamily={'h1'}
              color='greys.200'
              align={'center'}
              mt='7'
              mb='7'
              fontSize={{ base: '13px', sm: '20px', md: '30px', lg: '60px' }}
              >Co-Op is coming soon</Text>
          </Box>
        </Box>
      </>
    )
}