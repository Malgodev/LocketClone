import React, { useRef } from "react";
import {
  Flex,
  Input,
  Image,
  CloseButton,
  Button,
  Box,
} from "@chakra-ui/react";

import { useState } from "react";

import { AddImage } from "../../logo";

const CreatePost = () => {
  const imageRef = useRef(null);
  const [image, setImage] = useState([]);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handlePostCreation = async (e) => {
    console.log(image);
    
    // const res = await axios.

  };

  return (
    <Flex justifyContent={"center"} alignContent={"center"} flexDirection={"column"}>
      <Input type="file" hidden ref={imageRef} onChange={handleFileChange} />
      <Flex justifyContent={"center"} >
        <Box w={150} h={300} onClick={() => imageRef.current.click()} backgroundColor={"#000000"}>
          <AddImage
            
            style={{
              marginTop: "15px",
              marginLeft: "5px",
              cursor: "pointer",
            }}
            size={80}
          />
        </Box>
      </Flex>
      {/* {selectedFile && (
              <Flex
                mt={5}
                w={"full"}
                position={"relative"}
                justifyContent={"center"}
              >
                <Image src={selectedFile} alt="Selected img" />
                <CloseButton
                  position={"absolute"}
                  top={2}
                  right={2}
                  onClick={() => {
                    setSelectedFile(null);
                  }}
                />
              </Flex>
            )} */}
      <Button mr={3} onClick={handlePostCreation}>
        Post
      </Button>
    </ Flex>
  );
};

export default CreatePost;

// function useCreatePost(){

// }
