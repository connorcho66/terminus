// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import Auth from '../utils/auth';
// import { ADD_USER } from '../utils/mutations';
import {
    Input,
    FormControl,
    FormLabel,
    // FormHelperText,
    Stack,
    Flex,
    Text,
    VStack,
    useBreakpointValue,
    Container,
    Box,
    Button,
  } from '@chakra-ui/react';

function Login(props) {
    // const [formState, setFormState] = useState({ email: '', passwrod: '' });
    // const [addUser] = useMutation(ADD_USER);

    // const handleFormSubmit = async (event) => {
    //     event.preventDefault();
    //     const mutationResponse = await addUser({
    //         variables: {
    //             username: formState.username,
    //             email: formState.email,
    //             password: formState.password
    //         },
    //     });
    //     const token = mutationResponse.data.addUser.token
    //     Auth.login(token);
    // };

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormState({
    //         ...formState,
    //         [name]: value,
    //     });
    // };

    

    return (
        <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(https://images.unsplash.com/photo-1553453005-34d0cb607b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
        >
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack 
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
          >
            <Text
              color={'greys.200'}
              fontWeight={700}
              lineHeight={1.2}
            //   fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
              textShadow='5px .5px #822727'
              fontSize='h1'
              fontFamily='h1'>
              login
            </Text>
            <Container borderRadius='md' bg='greys.100' centerContent>
                <Box py={7}>
                    <FormControl>
                        <FormLabel htmlFor='email'>Email address</FormLabel>
                        <Input id='email' type='email' />
                        <FormLabel mt={2} htmlFor='password'>Password</FormLabel>
                        <Input pr='3rem' type={'password'} id='password' />
                    </FormControl>
                    <Button
                        mt={4}
                        ml={16}
                        bg={'red.800'}
                        rounded={'full'}
                        color={'white'}
                        _hover={{ bg: 'blue.500' }}
                        fontFamily='h2'>
                        login
                    </Button>
                </Box>
            </Container>
          </Stack>
        </VStack>
      </Flex>
    );
}

export default Login