import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DetailPage = ({ match, history }) => {
  //props
  //console.log(match);
  const id = match.params.id;
  const [onePost, setOnePost] = useState({
    id: '',
    title: '',
    content: '',
    author: '',
    created: '',
  });

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://localhost:8888/post/' + id,
    })
      .then((res) => {
        console.log('통신 성공 get ');
        console.log(res);
        setOnePost(res.data.data);
      })
      .catch((error) => {});
  }, []);

  const deletePost = () => {
    axios({
      method: 'DELETE',
      url: 'http://localhost:8888/post/' + id,
    })
      .then((res) => {
        console.log(res);
        if (res.data.code === 1) {
          history.push('/');
        } else {
          alert('삭제 실패');
        }
      })
      .catch((error) => {});
  };

  const UpdatePost = () => {
    history.push(`/post/${id}/update`);
  };

  return (
    <Container>
      <Card id={onePost.id} style={{ width: '800px', height: '600px' }}>
        <Card.Body>
          <Card.Title>{onePost.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {onePost.author}
          </Card.Subtitle>
          <Card.Text>{onePost.content}</Card.Text>
          <Card.Text>최근 수정일 : {onePost.created.slice(0, 19)}</Card.Text>
          <Button variant="outline-primary" onClick={UpdatePost}>
            수정하기
          </Button>
          {'  '}
          <Button variant="outline-danger" onClick={deletePost}>
            삭제하기
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DetailPage;
