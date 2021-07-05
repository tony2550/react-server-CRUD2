import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import PostCard from '../components/PostCard';

const ListPage = () => {
  const [posts, setPosts] = useState([
    {
      id: '',
      title: '',
      content: '',
      author: '',
      created: '',
    },
  ]);

  useEffect(() => {
    axios
      .get('http://localhost:8888/post/')
      .then((res) => {
        console.log('통신성공');
        console.log(res);
        setPosts(res.data);
      })
      .catch((error) => {
        console.log('통신실패');
        console.log(error);
      });
  }, []);
  return (
    <Container>
      <h1>리스트 페이지</h1>
      <br />
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      <br />
    </Container>
  );
};

export default ListPage;
