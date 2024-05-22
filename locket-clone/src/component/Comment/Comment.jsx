import React, { useEffect, useState } from 'react';

import { Avatar, Flex, Text } from '@chakra-ui/react';
import { BACKEND_API } from '../../config';
import axios from 'axios';

const Comment = ({ comment }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`${BACKEND_API}/user/profile/${comment.user_id}`);
        setUser(result.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [comment.user_id]);

  return (
    <Flex gap={4}>
      {user ? (
        <Avatar 
        src={user.avatar ? `/${user.avatar}` : ""}
        name={`${user.first_name} ${user.second_name}`} size="sm" />
      ) : (
        <Text fontSize={12} color="gray.500">
          Loading...
        </Text>
      )}
      <Flex gap={2} flexDirection="column">
        <Text fontWeight="bold" fontSize={12}>
          {user?.first_name + " " + user?.second_name}
        </Text>
        <Text fontSize={14} style={{ whiteSpace: "break-spaces" }}>
          {comment.comment}
        </Text>
      </Flex>
      <Text fontSize={12} color={"gray"}>
        {(new Date(comment.date_time)).toLocaleDateString()}
      </Text>
    </Flex>
  );
};

export default Comment;