import React from 'react'

import { Avatar, Flex, Text } from '@chakra-ui/react'

const Comment = ({comment, date_time, user_id, _id}) => {
  return (
    <Flex gap={4}>
    <Avatar src="/arya1.jpg" name={user_id} size="sm" />
    <Flex gap={2} flexDirection="column">  {/* Add flexDirection here */}
        <Text fontWeight="bold" fontSize={12}>
        {user_id}
        </Text>
        <Text fontSize={14} style={{ whiteSpace: "break-spaces" }}>
        {comment}
        </Text>
    </Flex>
    <Text fontSize={12} color={"gray"}>
        {date_time}
    </Text>
    </Flex>
  )
}

export default Comment