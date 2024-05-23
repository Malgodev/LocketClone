import React from "react";
import "./LoginRegister.css";
import {
  Container,
  Flex,
  VStack,
  Box,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_API } from "../../config";

const LoginRegister = ({ setUser }) => {
  const [show, setShow] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(true);
  const [inputs, setInputs] = React.useState({
    username: "",
    password: "",
    comfirmPassword: "",
  });

  const navigate = useNavigate();

  const handleClick = () => setShow(!show);
  const handleAuth = async () => {
    if (!inputs.username || !inputs.password) {
      alert("Please fill all fields");
      return;
    }

    // navigate('/');

    try {
      const res = await axios.post(
        BACKEND_API + "/user/login",
        { username: inputs.username, password: inputs.password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 200) {
        setUser(res.data);
        console.log(res.data);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleRegister = async () => {
    if (!inputs.username || !inputs.password || !inputs.comfirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (inputs.password !== inputs.comfirmPassword) {
      alert("Password does not match");
      return;
    }

    // navigate('/');

    try {
      const res = await axios.post(
        BACKEND_API + "/user/register",
        { login_name: inputs.username, password: inputs.password, first_name: inputs.username},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 200) {
        console.log(res.data);
        setIsLogin(true);
        // navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          <Box display={{ base: "none", md: "block" }}>
            <Image
              src="./Icon/arya.jpg"
              h={500}
              maxWidth={350}
              objectFit="cover"
              alt="web preview"
            />
          </Box>
          <VStack spacing={4} align={"stretch"}>
            <Box border={"1px solid gray"} borderRadius={10} padding={5}>
              <VStack spacing={4}>
                <Image
                  src="./Icon/logo.svg"
                  h={24}
                  cursor={"pointer"}
                  alt="Logo"
                />
                {/* Login form  */}
                <Input
                  placeholder="Username"
                  fontSize={14}
                  variant="filled"
                  type="text"
                  onChange={(e) =>
                    setInputs({ ...inputs, username: e.target.value })
                  }
                />
                <InputGroup size="md">
                  <Input
                    placeholder="Password"
                    fontSize={14}
                    variant="filled"
                    type={show ? "text" : "password"}
                    onChange={(e) =>
                      setInputs({ ...inputs, password: e.target.value })
                    }
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {!isLogin ? (
                  <Input
                    placeholder="Confirm Password"
                    value={inputs.comfirmPassword}
                    onChange={(e) =>
                      setInputs({ ...inputs, comfirmPassword: e.target.value })
                    }
                    fontSize={14}
                    type="password"
                  />
                ) : null}
                <Button
                  w={"full"}
                  colorScheme="blue"
                  size="sm"
                  fontSize={14}
                  onClick={(isLogin ? handleAuth : handleRegister)}
                >
                  {isLogin ? "Login" : "Register"}
                </Button>
                {/* End login form */}
                {/* Change login to sign up */}
                <Flex alignItems={"center"} justifyContent={"center"}>
                  <Box mx={2} fontSize={14}>
                    {isLogin
                      ? "Don't have an account?"
                      : "Already have an account?"}
                  </Box>
                  <Box
                    onClick={() => setIsLogin(!isLogin)}
                    color={"blue.500"}
                    cursor={"pointer"}
                  >
                    {isLogin ? "Sign Up" : "Login"}
                  </Box>
                </Flex>
                s{/* End change login to sign up */}
              </VStack>
            </Box>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default LoginRegister;
