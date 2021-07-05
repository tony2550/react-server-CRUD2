import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const UpdatePage = ({ match, history }) => {
  const id = match.params.id;
  const [post, setPost] = useState({
    title: '',
    content: '',
  });

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://localhost:8888/post/' + id,
    })
      .then((res) => {
        console.log(res);
        setPost(res.data.data);
      })
      .catch((error) => {});
  }, []);

  console.log(post);

  const changeValue = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();

    axios({
      method: 'PUT',
      headers: { 'content-type': 'application/json; charset=utf-8' },
      data: JSON.stringify(post),
      url: 'http://localhost:8888/post/' + id,
    })
      .then((res) => {
        console.log(res);
        history.push('/list');
      })
      .catch((error) => {
        alert('수정 실패');
        console.log(error);
      });
  };
  return (
    <Container>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>작성자</Form.Label>
          <Form.Control name="author" value={post.author} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>제목</Form.Label>
          <Form.Control
            type="text"
            name="title"
            onChange={changeValue}
            value={post.title}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>본문</Form.Label>
          <Form.Control
            type="text"
            name="content"
            multiple
            onChange={changeValue}
            value={post.content}
          ></Form.Control>
        </Form.Group>
        <Button onClick={submit} variant="outline-success">
          글 수정하기
        </Button>
      </Form>
    </Container>
  );
};

export default UpdatePage;
