import React from "react";
import {
  Box,
  Flex,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { CommentLogo, Like, Unlike } from "../../logo";
import axios from "axios";
import { BACKEND_API } from "../../config";

const PostFooter = ({ post, user, blogOwner, onNewComment }) => {
  const [liked, setLiked] = React.useState(false);
  const [likes, setLikes] = React.useState(-1);
  const newComment = React.useRef(null);

  const handleLike = () => {
    setLiked(!liked);
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
  };

  const handleComment = async () => {
    const res = await axios.post(
      `${BACKEND_API}/post/${post}`,
      { _id: post, comment: newComment.current.value, user: user._id },
      {
        headers: {
          "content-type": "application/json",
          authorization: user.token,
        },
      }
    );
    if (res.status === 200) {
      const post = res.data;
      onNewComment(post.comments);
      newComment.current.value = "";
    }
  };

  return (
    <>
      {" "}
      {/* post footer */}
      <Box mb={10} marginTop={"auto"}>
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
          {/* <Text as={"span"} fontWeight={400}>
          Kenobi good
        </Text> */}
          <Flex
            as={"span"}
            alignItems={"center"}
            gap={2}
            justifyContent={"space-between"}
            w={"full"}
          ></Flex>
        </Text>
        <InputGroup>
          {" "}
          <Input
            variant={"flushed"}
            placeholder={"Add a comment"}
            fontSize={14}
            ref={newComment}
          />
          <InputRightElement>
            <Button
              fontSize={14}
              color={"gray.500"}
              fontWeight={600}
              cursor={"pointer"}
              _hover={{ color: "blue.500" }}
              bg={"transparent"}
              onClick={handleComment}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Box>
    </>
  );
};

export default PostFooter;
