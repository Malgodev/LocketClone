import { Flex, Box } from '@chakra-ui/react';
import Sidebar from '../Sidebar/Sidebar';
import React from 'react';
import { useLocation } from 'react-router-dom';

const PageLayout = ({ user, children }) => { // Receive user prop
  const { pathname } = useLocation();

  return (
    <Flex>
        {/* navigate panel */}
        {(pathname !== "/auth") && user ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <Sidebar user={user} />
        </Box>
      ) : null}

        {/* page content */}
        <Box flex={1} w={{base:"calc(100% - 70px)", md: "calc(100% - 240px"}}>
            {children}
        </Box>
    </Flex>
  )
}

export default PageLayout