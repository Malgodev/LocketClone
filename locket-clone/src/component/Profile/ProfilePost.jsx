import {
  GridItem,
  Flex,
  Text,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalContent,
  Box,
  Avatar
} from "@chakra-ui/react";
import { Unlike, CommentLogo } from "../../logo";
import React from "react";

const ProfilePost = ({ img }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
                0
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Image
          src={img}
          alt="profile post"
          w={"100%"}
          h={"100%"}
          objectFit={"cover"}
        />
      </GridItem>

      <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={"3xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody bg={"white"} maxW={"90%"}>
            <Flex gap={4} w={"90%"} mx={"auto"}>
                <Box borderRadius={4} overflow={"hidden"} border={"1px solid"} borderColor={"whiteAlpha.300"} flex={1.5}>
                    <Image src={img} alt="profile post" />
                </Box>
                <Flex flex={1} flexDir={"column"} px={10} display={"none"}>
                    <Flex alignItems={"center"} justifyContent={"space-between"} gap={4}>
                        <Avatar src="/arya1.jpg" alt="Profile avatar" />
                        <Text fontWeight={"bold"} fontSize={12}>
                            Lmao
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePost;
