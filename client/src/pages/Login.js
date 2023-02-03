import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/Auth';
import { LOGIN } from '../utils/mutations';
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
    Link
  } from '@chakra-ui/react';

const Login = () => {
    const [login] = useMutation(LOGIN);

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(name + ", " + password);
        const mutationResponse = await login ({
            variables: {
                username: name,
                password: password
            },
        });
        const token = mutationResponse.data.login.token;
        Auth.login(token);
    };

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
                    <form onSubmit={handleFormSubmit}>
                        <FormControl id='name' isRequired>
                            <FormLabel>Username</FormLabel>
                            <Input
                                placeholder='Enter Your Username'
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FormControl>
                        <FormControl id='password' isRequired>
                            <FormLabel>Password</FormLabel>
                            <Input
                                placeholder='Enter Your Password'
                                type={'password'}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormControl>
                        <Button
                            type='submit'
                            mt={4}
                            ml={16}
                            bg={'red.800'}
                            rounded={'full'}
                            color={'white'}
                            _hover={{ bg: 'blue.500' }}
                            fontFamily='h2'
                            >
                            Login
                        </Button>
                        <Box pt={3}>
                            New to our store?{" "}
                            <Link color="teal.500" href="/signup">
                            Signup
                            </Link>
                        </Box>
                    </form>
                </Box>
            </Container>
          </Stack>
        </VStack>
      </Flex>
    );
}

export default Login