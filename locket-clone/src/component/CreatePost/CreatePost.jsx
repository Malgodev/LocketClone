import React, { useRef, useState } from "react";
import {
  Flex,
  Input,
  Image,
  Button,
  Box,
} from "@chakra-ui/react";
import axios from "axios";
import { AddImage } from "../../logo";
import { useNavigate } from "react-router-dom";
import { BACKEND_API } from "../../config";

const CreatePost = ({ user }) => {
  const imageRef = useRef(null);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setImage(file);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    } else {
      setPreview(null);
    }
  };

  const handlePostCreation = async (e) => {
    e.preventDefault();

    if (!image) {
      console.log("No image selected");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      const resPost = await axios.post(
        `${BACKEND_API}/photos/create`,
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

      if (resPost.status === 200) {
        await fetch(
          `${BACKEND_API}/post/upload`,
          {
            method: "POST",
            body: formData,
          }
        );
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Flex justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
      <Input type="file" hidden ref={imageRef} onChange={handleFileChange} />
      <Flex justifyContent={"center"} >
        <Box w={600} h={600} onClick={() => imageRef.current.click()} backgroundColor={"#888888"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          {preview 
            ? (<Image src={preview} boxSize="600px" objectFit="contain" />) 
            : (<AddImage
                style={{
                  cursor: "pointer",
                }}
                size={80}
              />)
          }
        </Box>
      </Flex>
      <Button mt={3} onClick={handlePostCreation}>
        Post
      </Button>
    </Flex>
  );
};

export default CreatePost;
