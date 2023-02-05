import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
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
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
  import { FiMenu } from 'react-icons/fi'

function Nav() {
    const isDesktop = useBreakpointValue({ base: false, sm: false, md: true, lg: true })
    return (
        <Box as="nav" 
          bgGradient='linear(to-b, red.800, browns.400)'
          w={'100%'}
          h={{base:'15vh', sm:'25vh'}}
          backgroundImage={
            'url(https://images.unsplash.com/photo-1553453005-34d0cb607b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)'
          }
          backgroundSize={'cover'}
          backgroundPosition={'center 40%'}>
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
                    <Button 
                      key='Co-Op' 
                      as={ReactLink} 
                      to='/coop'
                      fontFamily='mono'
                      mr='-4'
                      color='greys.200'>Co-Op</Button>
                    <Button 
                      key='Profile' 
                      as={ReactLink} 
                      to='/profile'
                      fontFamily='mono'
                      mr='-4'
                      color='greys.200'>Profile</Button>
                    <Button 
                      key='Shop' 
                      as={ReactLink} 
                      to='/shop'
                      fontFamily='mono'
                      color='greys.200'>Shop</Button>
                  </ButtonGroup>
                  <HStack spacing="6">
                    {/* TODO: create logout route/logic */}
                    <Button 
                      color='black' 
                      variant='ghost'
                      fontFamily='mono' 
                      _hover={'ghost'}>Log out</Button>
                  </HStack>
                </Flex>
              ) : (
                <Menu>
                  <MenuButton
                    as={IconButton}
                    variant="ghost"
                    _focus='browns.200'
                    icon={<FiMenu fontSize="1.25rem" />}
                    aria-label="Open Menu"
                    ></MenuButton>
                  <MenuList
                    bg='red.800'
                    opacity='0.5'
                    borderColor={'red.800'}>
                    <MenuItem
                      as={ReactLink} to='/coop'
                      color='greys.200'
                      bg='red.800'
                      opacity='0.5'>Co-Op</MenuItem>
                    <MenuItem
                      as={ReactLink} to='/profile'
                      color='greys.200'>Profile</MenuItem>
                    <MenuItem
                      as={ReactLink} to='/shop'
                      color='greys.200'>Shop</MenuItem>
                  </MenuList>
                </Menu>
              )}
            </HStack>
          </Container>
        </Box>
    )
  };

  export default Nav;
  