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
import axios from "axios";
import { AddImage } from "../../logo";
import {useNavigate} from "react-router-dom";
import { BACKEND_API } from "../../config";

const CreatePost = ({user}) => {
  const imageRef = useRef(null);
  const [image, setImage] = useState([]);

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handlePostCreation = async (e) => {
    e.preventDefault();
  
    if (!image) {
      console.log("No image selected");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
  
    try{
      const resPost = await axios.post(
        `${BACKEND_API}/photos/kys`,
        {
          file_name: image.name,
          user_id: user._id,
          comments: [],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (resPost.status === 200){
        const resUpload = await fetch(
          `${BACKEND_API}/post/upload`,
          {
            method: "POST",
            body: formData,
          }
        );
        navigate("/");
      }
    }catch (err) {
      console.log(err);
    }
  };

//   router.post("/", TokenVerify, async (req, res) => {
//     try {
//         const post = new model.post(req.body);
//         await post.save();
//         res.send("Post successfully");
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Please try again");
//     }
// });


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
