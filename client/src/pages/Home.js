import React from 'react';
import { Link as ReactLink } from 'react-router-dom';

import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    Box,
  } from '@chakra-ui/react';


  export default function Home() {
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
              Termin<Text as='span' color={'#171923'}>us</Text>
            </Text>
            </Box>
            <Stack direction={'row'} justify='center'>
              <Button
                as={ReactLink}
                to='/signup'
                bg={'red.800'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'red.700' }}
                _focus={{ boxShadow: 'none', bg: 'red.600'}}
                fontFamily='h2'>
                Signup
              </Button>
              <Button
                as={ReactLink}
                to='/login'
                bg={'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'whiteAlpha.500' }}
                _focus={{ boxShadow: 'none'}}
                fontFamily='h2'>
                Login
              </Button>
            </Stack>
        </VStack>
      </Flex>
    );
  }