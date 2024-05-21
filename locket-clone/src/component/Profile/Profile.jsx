import { Avatar, AvatarGroup, Container, Flex, VStack, Text, Button, Grid } from "@chakra-ui/react";
import ProfilePost from "./ProfilePost";
import React from "react";

const Profile = () => {
  return (
    <Container maxW="container.lg" py={5}>
        {/* Profile header */}
      <Flex
        py={10}
        px={4}
        pl={{ base: 4, md: 10 }}
        w={"full"}
        mx={"auto"}
        flexDirection={"row"}
      >
        <Flex gap={4} py={10} direction={"row"}>
          <AvatarGroup
            size={"2xl"}
            justifyContent={"center"}
            alignSelf={"flex-start"}
            mx={"auto"}
          >
            <Avatar name="Smao" src="/arya1.jpg" alt="Profile avatar" />
          </AvatarGroup>

          <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
            <Flex
              gap={4}
              direction={{ base: "row" }}
              justifyContent={{ base: "center" }}
              alignItems={"center"}
              w={"full"}
            >
                <Text fontSize={"sm"}>Lmao</Text>
                <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
                    <Button bg={"blue.300"} color={"white"} _hover={{bg: "blue.400"}} size={"xs"}>Edit Profile</Button>
                </Flex>
            </Flex>
            
            <Flex alignItems={"center"} gap={3}>
                <Text>
                    <Text as="span" fontWeight={"bold"} mr={1}>-1</Text>
                    Posts
                </Text>
                <Text>
                    <Text as="span" fontWeight={"bold"} mr={1}>-1</Text>
                    Followers
                </Text>
                <Text>
                    <Text as="span" fontWeight={"bold"} mr={1}>-1</Text>
                    Following
                </Text>
            </Flex>
            <Flex alignItems={"center"} gap={4} >
                <Text fontSize={"sm"} fontWeight={"bold"}>Mathematician</Text>
            </Flex>
                <Text fontSize={"sm"}>Description</Text>
          </VStack>
        </Flex>
      </Flex>

      {/* Profile body */}
      <Flex
        px={{ base: 2, sm: 4 }}
        maxW={"full"}
        mx={"auto"}
        borderTop={"1px solid"}
        borderColor={"blackAlpha.300"}
        direction={"column"}
      >
        <Grid templateColumns={"repeat(3, 1fr)"} gap={1} columnGap={1}>
            <ProfilePost img="/images/arya1.jpg" />
            <ProfilePost img="/images/arya2.jpg" />
            <ProfilePost img="/images/arya3.jpg" />
            <ProfilePost img="/images/arya4.jpg" />
        </Grid>
      </Flex>
    </Container>
  );
};

export default Profile;
