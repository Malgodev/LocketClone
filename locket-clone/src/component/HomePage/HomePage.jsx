import { Container, Flex, Box } from "@chakra-ui/react";
import React from "react";
import Posts from "../Posts/Posts";

const HomePage = ({user}) => {
    return(
        <Container maxW={"container.lg"}>
            <Flex gap={20}>
                <Box flex={2} py={10}>
                    <Posts user={user}/>
                </Box>
            </Flex>
        </Container>
    );
}

export default HomePage;