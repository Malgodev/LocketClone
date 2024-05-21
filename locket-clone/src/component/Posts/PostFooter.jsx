import React from 'react'
import { Box, Flex, Text, InputGroup, Input, InputRightElement, Button } from '@chakra-ui/react'
import { CommentLogo, Like, Unlike } from '../../logo';

const PostFooter = ({user = {current: {first_name: "error"}}}) => {
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
    <>      {/* post footer */}
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
      {user.current.first_name}{" "}
        {/* <Text as={"span"} fontWeight={400}>
          Kenobi good
        </Text> */}
        <Text fontSize={"sm"} color={"gray.500"}>
          View all {user.current.first_name} comments
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
    </Box></>
  )
}

export default PostFooter