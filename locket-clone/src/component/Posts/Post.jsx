import React from "react";
import {
  Box,
  Image,
  Flex,
  Avatar,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { Like, Unlike, CommentLogo } from "../../logo";

const Post = () => {
  const [liked, setLiked] = React.useState(false);
  const [likes, setLikes] = React.useState(-1);

  const handleLike = () => {
    setLiked(!liked);
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
  };

  return (
    <>
      {/* post header */}
      <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
          <Avatar
            src="./images/kenobi1.jpg"
            alt="user profile pic"
            size={"sm"}
          />
          <Flex fontSize={12} fontWeight={"bold"} gap={2}>
            Kenobi
            <Box color={"gray.500"}>• 1w</Box>
          </Flex>
        </Flex>
        <Box cursor={"pointer"}>
          <Text
            fontSize={12}
            color={"black"}
            fontWeight={"bold"}
            _hover={{ color: "blue.500" }}
            transition={"0.2 ease out"}
          >
            Unfollow
          </Text>
        </Box>
      </Flex>


      {/* post body */}
      <Box my={2} borderRadius={7} overflow={"hidden"}>
        <Image src="./images/kenobi1.jpg" alt="user profile image" />
      </Box>


      {/* post footer */}
      <Box mb={10 }>
        <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
          <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
            {liked ? <Like /> : <Unlike />}
          </Box>
          <Box cursor={"pointer"} fontSize={18}>
            <CommentLogo />
          </Box>
        </Flex>
        <Text fontWeight={600} fontSize={"sm"}>
          {likes} likes
        </Text>
        <Text fontSize={"sm"} fontWeight={700}>
          Kenobi{" "}
          <Text as={"span"} fontWeight={400}>
            Kenobi good
          </Text>
          <Text fontSize={"sm"} color={"gray.500"}>
            View all Kenobi comments
          </Text>
          <Flex
            alignItems={"center"}
            gap={2}
            justifyContent={"space-between"}
            w={"full"}
          >
            <InputGroup>
              <Input
                variant={"flushed"}
                placeholder={"Add a comment"}
                fontSize={14}
              />
              <InputRightElement>
                <Button
                  fontSize={14}
                  color={"gray.500"}
                  fontWeight={600}
                  cursor={"pointer"}
                  _hover={{ color: "blue.500" }}
                  bg={"transparent"}
                >
                  Post
                </Button>
              </InputRightElement>
            </InputGroup>
          </Flex>
        </Text>
      </Box>
    </>
  );
};

export default Post;
