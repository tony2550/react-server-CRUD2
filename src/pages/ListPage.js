import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import PostCard from '../components/PostCard';

const ListPage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'content1',
      content: 'aaaaaaaaaa',
      author: 'a',
      created: '2020.01.20',
    },
    {
      id: 2,
      title: 'content2',
      content: 'bbbbbbb',
      author: 'b',
      created: '2020.01.20',
    },
    {
      id: 3,
      title: 'content3',
      content: 'ccccccccccccc',
      author: 'c',
      created: '2020.01.20',
    },
    {
      id: 4,
      title: 'content4',
      content: 'dddddd',
      author: 'd',
      created: '2020.01.20',
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
