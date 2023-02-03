import React, { useEffect } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME, QUERY_SINGLE_USER } from '../utils/queries';
import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  Container,
  Box,
  Button,
  Link,
  Spacer
} from '@chakra-ui/react';

export default function Success() {
    
    const {loading, data} = useQuery(QUERY_SINGLE_USER)

    const user = data?.user || 'No user found'
    console.log(user);

    return (
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(https://images.unsplash.com/photo-1553453005-34d0cb607b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}>
            <Box display={'flex'} align={'flex-start'} justify={'center'} direction={'row'}>
            <Text
              color={'greys.200'}
              fontWeight={700}
              lineHeight={1.2}
              textShadow='5px .5px #822727'
              fontSize={{ base: '50px', sm: '60px', md: '85px', lg: '120px' }}
              fontFamily='h1'>
              Success!</Text>
            </Box>
            <Box h={{base:'6', sm:'10' }}></Box>
            <Box borderRadius='md' bg='greys.100' centerContent>
              <Text
                fontFamily='mono'
                color='red.800'
                p='2'
                fontSize={{ base: '10px', sm: '14px', md: '18px', lg: '20px' }}
                textAlign={'center'}>Your items have been added to your Co-Op's inventory</Text>
            </Box>
            <Box h={{base:'2', sm:'2' }}></Box>
            <Box borderRadius='md' bg='greys.300' centerContent>
              <Text
                fontFamily='mono'
                color='red.800'
                p='2' 
                fontSize={{ base: '10px', sm: '14px', md: '18px', lg: '20px' }}
                textAlign={'center'}>You are being redirected to your Profile page</Text>
            </Box>
        </VStack>
      </Flex>
    );
  }
  