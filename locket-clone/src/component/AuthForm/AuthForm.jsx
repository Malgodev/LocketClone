import React from 'react'
import { Box, VStack, Image, Input, InputGroup, InputRightElement, Button, Flex } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';


const AuthPage = () => {
  const [show, setShow] = React.useState(false)
  const [isLogin, setIsLogin] = React.useState(true)
  const [inputs, setInputs] = React.useState({
    username: '', 
    password: '',
    comfirmPassword: ''
  })

  const navigate = useNavigate()

  const handleClick = () => setShow(!show)
  const handleAuth = () => {
    if (!inputs.username || !inputs.password) {
      alert("Please fill all fields");
      return;
    }
    
    navigate("/");
  }

  return (
    <Box border={"1px solid gray"} borderRadius={10} padding={5} >
      <VStack spacing={4}> 
        <Image src="./Icon/logo.svg" h={24} cursor={"pointer"} alt="Logo" />

        {/* Login form  */}
        <Input 
          placeholder='Username'
          fontSize={14}
          variant='filled'
          type='text'
          onChange={(e) => setInputs({...inputs, username: e.target.value})}
        />
        <InputGroup size="md">
          <Input 
            placeholder='Password'
            fontSize={14}
            variant='filled'
            type={show ? 'text' : 'password'}
            onChange={(e) => setInputs({...inputs, password: e.target.value})}
          />  
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup> 

        {
          !isLogin 
            ? <Input placeholder="Confirm Password"
            value={inputs.comfirmPassword}
            onChange={(e) => setInputs({...inputs, comfirmPassword: e.target.value})}
            fontSize={14} type="password" /> 
            : null
        }

        <Button w={"full"} colorScheme="blue" size="sm" fontSize={14} onClick={handleAuth}>
          {isLogin ? 'Login' : 'Register'}
        </Button> 
        {/* End login form */}

        {/* Change login to sign up */}
        <Flex alignItem={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box onClick={() => setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
            {isLogin ? "Sign Up" : "Login"}
          </Box>
        </Flex>s
        {/* End change login to sign up */}
      </VStack>
    </Box>
  )
}

export default AuthPage