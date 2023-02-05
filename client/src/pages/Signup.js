import React, { useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/Auth.js';
import { ADD_USER } from '../utils/mutations';
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
    Link,
    Spacer
  } from '@chakra-ui/react';

const Signup = () => {
    // const [formState, setFormState] = useState({ email: '', passwrod: '' });
    const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addUser({
            variables: {
                username: name,
                email: email,
                password: password
            },
        });
        const token = mutationResponse.data.addUser.token
        Auth.login(token);
    };

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormState({
    //         ...formState,
    //         [name]: value,
    //     });
    // };

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

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
              fontSize={{ base: '50px', sm: '60px', md: '85px', lg: '120px' }}
              textShadow='5px .5px #822727'
              fontFamily='h1'>
              signup
            </Text>
            <Container borderRadius='md' bg='greys.100' centerContent>
                <Box py={10}>
                    {/* <FormControl>
                        <FormLabel htmlFor='email'>Email address</FormLabel>
                        <Input id='email' type='email' />
                        <FormLabel mt={2} htmlFor='password'>Password</FormLabel>
                        <Input pr='3rem' type={'password'} id='password' />
                    </FormControl> */}
                    <form onSubmit={handleFormSubmit}>
                        <FormControl id='name' isRequired>
                            <FormLabel fontFamily='mono'>Username</FormLabel>
                            <Input
                                placeholder='Enter Your Username'
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Spacer h='5' />
                        </FormControl>
                        <FormControl id='email' isRequired>
                            <FormLabel fontFamily='mono'>Email</FormLabel>
                            <Input
                                placeholder='Enter Your Email'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Spacer h='5' />
                        </FormControl>
                        <FormControl id='password' isRequired>
                            <FormLabel fontFamily='mono'>Password</FormLabel>
                            <Input
                                placeholder='Enter Your Password'
                                type={'password'}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormControl>
                        <Button
                            type='submit'
                            as={ReactLink}
                            to='/profile'
                            mt={4}
                            ml={16}
                            bg={'red.800'}
                            rounded={'full'}
                            color={'white'}
                            _hover={{ bg: 'red.700' }}
                            _focus={{ boxShadow: 'none', bg: 'red.600'}}
                            fontFamily='h2'
                            >
                            Signup
                        </Button>
                        <Box pt={3} fontFamily='mono'>
                            Already a Survivor?{" "}
                            <Link 
                              color="red.800" 
                              as={ReactLink}
                              to='/login'
                              fontFamily='mono'>
                              Login
                            </Link>
                        </Box>
                    </form>
                </Box>
            </Container>
          </Stack>
        </VStack>
      </Flex>
    );
};

export default Signup