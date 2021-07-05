import axios from 'axios';
import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const WritePage = ({ history }) => {
  const [postDto, setPostDto] = useState({
    title: '',
    content: '',
    author: '',
  });

  console.log(postDto);

  const changeValue = (e) => {
    setPostDto({
      ...postDto,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();

    axios({
      method: 'POST',
      headers: { 'content-type': 'application/json; charset=utf-8' },
      data: JSON.stringify(postDto),
      url: 'http://localhost:8888/post/',
    })
      .then((res) => {
        console.log(res);
        history.push('/list');
      })
      .catch((error) => {
        alert('글쓰기 실패');
        console.log(error);
      });
  };
  return (
    <Container>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>작성자</Form.Label>
          <Form.Control type="text" name="author" onChange={changeValue} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>제목</Form.Label>
          <Form.Control
            type="text"
            name="title"
            onChange={changeValue}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>본문</Form.Label>
          <Form.Control
            type="text"
            name="content"
            onChange={changeValue}
          ></Form.Control>
        </Form.Group>
        <Button onClick={submit} variant="outline-success">
          글 저장하기
        </Button>
      </Form>
    </Container>
  );
};

export default WritePage;
