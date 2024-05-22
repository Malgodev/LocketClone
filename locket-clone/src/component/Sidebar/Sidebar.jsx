import React from 'react'
import { Box, Flex, Link, Tooltip } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import { Logo, User, Home, Search, CreatePost, Logout } from "../../logo"

const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <Home size={25} />,
      text: "Home",
      link: "/"
    },
    {
      icon: <Search size={25} />,
      text: "Search",
      link: "/search"
    },
    {
      icon: <User size={25} />,
      text: "Profile",
      link: "/profile/66372be76fe2c5a42c96c95d"
    },
    {
      icon: <CreatePost size={25} />,
      text: "Create Post",
      link: "/create-post"
    },
  ]

  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"grayAlpha.200"}
      py={8}
      pos={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={"column"} gap={10} w={"full"} height={"full"}>
        {/* Logo */}
        <Link to="/" as={RouterLink} display={{ base: "none", m: "block" }} cursor={"pointer"} _hover={{ bg: "blackAlpha.200" }} justifyContent={"center"} alignItems={"center"}>
          <Logo />
        </Link>

        {/* Sidebar Items */}
        <Flex direction={"column"} gap={4} cursor={"pointer"}>
          {sidebarItems.map((item, index) => (
            <Tooltip
              key={index}
              hasArrow
              label={item.text}
              placement='right'
              ml={1}
              openDelay={500}
              display={{ base: "block", md: "none" }}
            >
              <Link
                display={"flex"}
                to={item.link}
                as={RouterLink}
                alignItems={"center"}
                gap={4}
                _hover={{ bg: "blackAlpha.200" }}
                borderRadius={6}
                p={2}
                w={{ base: 10, md: "full" }}
                justifyContent={{ base: "center", md: "flex-start" }}
              >
                {item.icon}
                <Box display={{ base: "none", md: "block" }}>
                  {item.text}
                </Box>
              </Link>
            </Tooltip>
          ))}
        </Flex>

        {/* Logout */}
        <Tooltip
          key="logout"
          hasArrow
          label={"Logout"}
          placement='right'
          ml={1}
          openDelay={500}
          display={{ base: "block", md: "none" }}
        >
          <Link
            display={"flex"}
            to={"/auth"}
            as={RouterLink}
            alignItems={"center"}
            gap={4}
            _hover={{ bg: "blackAlpha.200" }}
            borderRadius={6}
            p={2}
            w={{ base: 10, md: "full" }}
            mt={"auto"}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <Logout size={25} />
            <Box display={{ base: "none", md: "block" }}>
              {"Logout"}
            </Box>
          </Link>
        </Tooltip>
      </Flex>
    </Box>
  )
}

export default Sidebar
