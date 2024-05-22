import { Container, List } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import Post from './Post'
import axios from 'axios'
import { BACKEND_API } from '../../config'

// {file_name, date_time, user_id, comments}

const Posts = () => {
  const [loading, setLoading] = React.useState(true)
  const posts = useRef(null)

  useEffect(() => {
    axios.get(BACKEND_API + "/photos/list").then((result) => {
      posts.current = result.data.map((item) => {
        return (<Post
          post_id={item._id}
          file_name={item.file_name}
          date_time={item.date_time}
          user_id={item.user_id}
          comments={item.comments}
        />)
    });
      setLoading(false);
    });
  });

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      <List >
        {loading ? <div>Loading...</div> : posts.current}
      </List>
    </Container>
  )
}

export default Posts