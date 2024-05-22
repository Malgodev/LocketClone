import { Avatar, AvatarGroup, Container, Flex, VStack, Text, Button, Grid } from "@chakra-ui/react";
import ProfilePost from "./ProfilePost";
import React, { useEffect } from "react";
import { BACKEND_API } from "../../config";
import axios from "axios";

const Profile = ({user}) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const photos = React.useRef(null)

    useEffect(() => {
        axios.get(`${BACKEND_API}/photos/photoOfUser/${user._id}`).then((result) => {
            photos.current = result.data.map((item) => {
                return(
                <ProfilePost
                    key={item._id}
                    user = {user}
                    img = {item}
                />
            )});
            setIsLoading(false);
        });
    });

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
            <Avatar name="Smao" 
            src={user.avatar ? `/${user.avatar}` : ""}
            alt="Profile avatar" />
          </AvatarGroup>

          <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
            <Flex
              gap={4}
              direction={{ base: "row" }}
              justifyContent={{ base: "center" }}
              alignItems={"center"}
              w={"full"}
            >
                <Text fontSize={"sm"}>{user.first_name + " " + user.last_name}</Text>
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
                <Text fontSize={"sm"} fontWeight={"bold"}>{user.occupation}</Text>
            </Flex>
                <Text fontSize={"sm"}>{user.description}</Text>
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
            {!isLoading ? photos.current : <div>Loading...</div>}
        </Grid>
      </Flex>
    </Container>
  );
};

export default Profile;
