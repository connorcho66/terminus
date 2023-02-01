import React from 'react';
import {
    Box,
    Text,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    IconButton,
    useBreakpointValue,
  } from '@chakra-ui/react'
  import { FiMenu } from 'react-icons/fi'

function Nav() {
    const isDesktop = useBreakpointValue({ base: false, sm: false, md: true, lg: true })
    return (
    //   <Box as="section" pb={{ base: '12', md: '24' }}>
        <Box as="nav" bg="browns.400" boxShadow="sm">
          <Container py={{ base: '4', lg: '5' }}>
            <HStack>
              <Text
                color={'greys.200'}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={{ base: '44px', md: '65px', lg: '90px' }}
                textShadow='5px .5px #822727'
                fontFamily='h1'
                pr={{ base: '3px', md: '7px', lg:'12'}}>
                Termin<Text as='span' color={'#171923'}>us</Text>
              </Text>
              {isDesktop ? (
                <Flex justify="space-between" flex="1">
                  <ButtonGroup variant="link" spacing="8">
                    {['Co-Op', 'Profile', 'Store'].map((item) => (
                      <Button color='greys.200' key={item}>{item}</Button>
                    ))}
                  </ButtonGroup>
                  <HStack spacing="4">
                    <Button color='#171923' variant="ghost">Log out</Button>
                    {/* <Button variant="primary">Sign up</Button> */}
                  </HStack>
                </Flex>
              ) : (
                <IconButton
                  variant="ghost"
                  icon={<FiMenu fontSize="1.25rem" />}
                  aria-label="Open Menu"
                />
              )}
            </HStack>
          </Container>
        </Box>
    //   </Box>
    )
  };

  export default Nav;
  