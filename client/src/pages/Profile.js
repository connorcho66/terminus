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
            <Stack>
              <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "150px" }}
                src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
                alt="Profile placeholder"
                borderRadius="50%"
              />
            </Stack>
            <VStack>
              <Text fontFamily="h1">Username</Text>
              <Text fontFamily="h1">Email</Text>
              <Text fontFamily="h1">Co-Op: Coming soon!</Text>
              <HStack w='90%'>
              {badgeImgs.map((img) => (
                <Image borderRadius='full'
                boxSize='75px' src={img} />
              ))}
              </HStack>
            </VStack>
          </Box>
        <Box />
      </Box>
    </>
  );
};

export default Profile;