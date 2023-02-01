import React from 'react';
// import theme from '../theme/theme';
import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
// const theme = extendTheme({
//     textStyles: {
//       h1: {
//         // you can also use responsive styles
//         fontFamily: 'Lacquer',
//         fontSize: ['48px', '72px'],
//         fontWeight: 'bold',
//         lineHeight: '110%',
//         letterSpacing: '-2%',
//         color: 'red',
//       },
//       btn: {
//         fontSize: ['36px', '48px'],
//         fontWeight: 'semibold',
//         lineHeight: '110%',
//         letterSpacing: '-1%',
//       },
//     },
//   });

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
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
            //   fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
              textShadow='5px .5px #822727'
              fontSize='h1'
              fontFamily='h1'>
              Termin<Text as='span' color={'#171923'}>us</Text>
            </Text>
            <Stack direction={'row'}>
              <Button
                bg={'red.800'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'blue.500' }}
                fontFamily='h2'>
                Signup
              </Button>
              <Button
                bg={'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'whiteAlpha.500' }}
                fontFamily='h2'>
                Login
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }