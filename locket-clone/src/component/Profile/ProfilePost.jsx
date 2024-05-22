import {
  GridItem,
  Flex,
  Text,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalBody,
  ModalContent,
  Box,
  Avatar,
  Divider,
  VStack,
} from "@chakra-ui/react";
import { Unlike, CommentLogo, Delete } from "../../logo";
import Comment from "../Comment/Comment";
import React, { useEffect, useState } from "react";
import PostFooter from "../Posts/PostFooter";

const ProfilePost = ({ user, img }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [comments, setComments] = useState(img.comments);

  useEffect(() => {
    setComments(img.comments);
  }, [img.comments]);

  const handleComment = (comments) => {
    setComments((prevComments) => comments);
  };

  return (
    <>
      <GridItem
        cursor={"pointer"}
        borderRadius={4}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"blackAlpha.300"}
        position={"relative"}
        aspectRatio={1 / 1}
        top={5}
        onClick={onOpen}
      >
        <Flex
          opacity={0}
          _hover={{ opacity: 1 }}
          position={"absolute"}
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg={"whiteAlpha.500"}
          transition={"all 0.3s ease"}
          zIndex={1}
          justifyContent={"center"}
        >
          <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
            <Flex>
              <Unlike size={20} />
              <Text fontWeight={"bold"} ml={2}>
                0
              </Text>
            </Flex>
            <Flex>
              <CommentLogo size={20} />
              <Text fontWeight={"bold"} ml={2}>
                {comments.length}
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Image
          src={`/images/${img.file_name}`}
          alt="profile post"
          w={"100%"}
          h={"100%"}
          objectFit={"cover"}
        />
      </GridItem>

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
                  src={`/images/${img.file_name}`}
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
                <PostFooter post={img} user={user} blogOwner={user} onNewComment={handleComment} />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePost;
