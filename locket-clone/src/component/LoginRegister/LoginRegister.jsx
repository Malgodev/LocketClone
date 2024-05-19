import React from "react";
import './LoginRegister.css';
import AuthForm from '../AuthForm/AuthForm';
import { Container, Flex, VStack, Box, Image } from "@chakra-ui/react";

const LoginRegister = () => {
    return (
        <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
            <Container maxW={"container.md"} padding={0}>
                <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
                    <Box display = {{base: "none", md: "block"}}>
                        <Image src="./Icon/arya.jpg" h={500} maxWidth={350} objectFit="cover" alt="web preview"/>
                    </Box>
                    <VStack spacing={4} align={"stretch"}>
                        <AuthForm />
                    </VStack>
                </Flex>
            </Container>
        </Flex>
    );
}

export default LoginRegister;
