import React , {useState}from "react";
import {
  Box,
  Image,
  Flex,
  Avatar,
  Text,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Divider,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { Delete } from "../../logo";
import { BACKEND_API } from "../../config";
import PostFooter from "./PostFooter";  
import Comment from "../Comment/Comment";  

const Post = ({ user, post}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = React.useState(true);
  const blogOwner = React.useRef({first_name: "", last_name: ""});
  const [comments, setComments] = useState(post.comments);
  
  const handleComment = (comments) => {
    setComments((prevComments) => comments);
  };

  React.useEffect(() => {
    axios.get(BACKEND_API + `/user/profile/${post.user_id}`).then((result) => {
      blogOwner.current = result.data;
      setIsLoading(false);
    });
  });

  return (
    <>
      {/* post header */}
      <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
          <Avatar
            src={`./images/${post.file_name}`}
            alt="user profile pic"
            size={"sm"}
          />
          <Flex fontSize={12} fontWeight={"bold"} gap={2}>
            {blogOwner.current.first_name + " " + blogOwner.current.last_name}
            <Box color={"gray.500"}>• {post.date_time}</Box>
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
      <Box my={2} borderRadius={7} overflow={"hidden"} onClick={onOpen} >
        <Image width={"700px"} src={`./images/${post.file_name}`} alt="user profile image" />
      </Box>

      {!isLoading ? <PostFooter post={post._id} user={user} blogOwner={blogOwner}/> : <div>Loading</div>}

      <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={"4xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={"white.500"} pb={1}>
            <Flex gap="4" flexDir="row">
              <Box
                borderRadius={4}
                overflow="hidden"
                border="1px solid"
                borderColor="blackAlpha.300"
                flex={1.5}
                aspectRatio={9 / 16}
                w="100%"
              >
                <Image
                  src={`/images/${post.file_name}`}
                  alt="profile post"
                  w={"100%"}
                  h={"100%"}
                  objectFit={"cover"}
                />
              </Box>

              <Flex flex={1} flexDir={"column"} px={10} display={"flex"}>
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  <Flex gap={4} alignItems={"center"}>
                    <Avatar
                      src={user.avatar ? `/${user.avatar}` : ""}
                      name={user.first_name + " " + user.last_name}
                      size={"sm"}
                    />
                    <Text fontWeight={"bold"} fontSize={12}>
                      {user.first_name + " " + user.last_name}
                    </Text>
                  </Flex>
                  <Box
                    _hover={{ bg: "whiteAlpha.300", color: "red.600" }}
                    borderRadius={4}
                    p={1}
                  >
                    <Delete size={20} cursor={"pointer"} />
                  </Box>
                </Flex>
                <Divider my={4} bg={"gray.500"} />

                <VStack w={"30vh"} alignItems={"start"} maxH={"600px"} overflowY={"auto"}>
                  {comments.map((comment) => (
                    <Comment key={comment._id} comment={comment} />
                  ))}
                </VStack>
                <Divider my={4} bg={"gray.500"} />
                <PostFooter post={post} user={user} blogOwner={user} onNewComment={handleComment} />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>

    </>
  );
};

export default Post;
