import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin-bottom: 10px;
  color: red;
`;

const PostCard = ({ post }) => {
  return (
    <StyledDiv>
      <Link
        to={{
          pathname: `/post/${post.id}`,
          state: { post },
        }}
        className="navbar-brand"
      >
        <Card id={post.id} style={{ width: '800px' }}>
          <Card.Header
            as="h5"
            style={{ fontWeight: 'bolder', color: '#171717' }}
          >
            <Row>
              <Col>작성자 : {post.author}</Col>
              <Col></Col>
              <Col>작성일 : {post.created.slice(0, 10)}</Col>
            </Row>
          </Card.Header>
          <Card.Body style={{ color: '#444444' }}>
            <Card.Title>글 제목 : {post.title}</Card.Title>
            <Card.Text>{post.content.slice(0, 5)}...</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </StyledDiv>
  );
};

export default PostCard;
