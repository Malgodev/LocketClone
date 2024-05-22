import React from "react";
import {
  Box,
  Image,
  Flex,
  Avatar,
  Text,
} from "@chakra-ui/react";
import axios from "axios";

import { BACKEND_API } from "../../config";
import PostFooter from "./PostFooter";  

const Post = ({post_id, file_name, date_time, user_id, comments}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const user = React.useRef({first_name: "", last_name: ""});
  
  React.useEffect(() => {
    axios.get(BACKEND_API + `/user/profile/${user_id}`).then((result) => {
      user.current = result.data;
      setIsLoading(false);
    });
  });

  return (
    <>
      {/* post header */}
      <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
          <Avatar
            src={`./images/${file_name}`}
            alt="user profile pic"
            size={"sm"}
          />
          <Flex fontSize={12} fontWeight={"bold"} gap={2}>
            {user.current.first_name + " " + user.current.last_name}
            <Box color={"gray.500"}>• {date_time}</Box>
          </Flex>
        </Flex>

        <Box cursor={"pointer"}>
          <Text
            fontSize={12}
            color={"black"}
            fontWeight={"bold"}
            _hover={{ color: "blue.500" }}
            transition={"0.2 ease out"}
          >
            Unfollow
          </Text>
        </Box>
      </Flex>


      {/* post body */}
      <Box my={2} borderRadius={7} overflow={"hidden"}>
        <Image width={"700px"} src={`./images/${file_name}`} alt="user profile image" />
      </Box>

      {!isLoading ? <PostFooter post={post_id} user={user} user_id={user_id}/> : <div>Loading</div>}
    </>
  );
};

export default Post;
