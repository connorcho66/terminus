import { useQuery } from "@apollo/client";
import React from "react";
import { QUERY_SINGLE_USER } from "../utils/queries";
import { Box, Image, Stack, Text, VStack, HStack } from "@chakra-ui/react";
import Nav from "../components/Nav";
import Auth from "../utils/Auth";

const Profile = () => {
  const badgeImgs = [
    "./img/badges/axe.png",
    "./img/badges/bomb.png",
    "./img/badges/camp.png",
    "./img/badges/chat.png",
    './img/badges/fire.png',
    './img/badges/redcross.png',
    './img/badges/shield.png',
    './img/badges/sprout.png'
  ];
  // const currentUN = Auth.getProfile().data.username;

  // const { loading, data } = useQuery(QUERY_SINGLE_USER, {
  //   variables: { username: currentUN },
  // });

  // loading ? console.log("loading") : console.log(data);

  return (
    <>
      <Nav />
        <Box
          as="main"
          height="100vh"
          padding="1rem"
          backgroundColor="RGBA(0, 0, 0, 0.80)"
        >
          
            <Box
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              borderWidth="1px"
              borderRadius="lg"
            >
              <VStack>
                <Box
                mt="25px"
                mb="20px"
                >
                  <Image
                    boxSize='200px'
                    objectFit="cover"
                    // maxW={{ base: "100px", sm: "150px" }}
                    src="https://i.pinimg.com/originals/78/5d/ea/785dea225929ab34ca9f663af246d862.png"
                    alt="Profile placeholder"
                    borderRadius="100%"
                  />
                </Box>
                <Text fontFamily="h1" color={'white'} fontSize='18px'>Username: Coming soon!</Text>
                <Text fontFamily="h1" color={'white'} fontSize='18px'>Email: Coming soon!</Text>
                <Text fontFamily="h1" color={'white'} fontSize='18px'>Co-Op: Coming soon!</Text>
                <Box>
                  <HStack w='100%'>
                  {badgeImgs.map((img) => (
                    <Image borderRadius='full'
                    boxSize='90px' src={img} />
                  ))}
                  </HStack>
                </Box>
              </VStack>
            </Box>
          <Box />
        </Box>
    </>
  );
};

export default Profile;