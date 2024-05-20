import { Container } from '@chakra-ui/react'
import React from 'react'
import Post from './Post'

const Posts = () => {
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  )
}

export default Posts