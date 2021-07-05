import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const HomePage = () => {
  const [article, setArticle] = useState('first print');

  useEffect(() => {
    axios
      .get('http://localhost:8888/post/')
      .then((res) => {
        console.log('통신성공');
        console.log(res.data);
        setArticle(res.data);
      })
      .catch((error) => {
        console.log('통신실패');
        console.log(error);
      });
  }, []);

  return (
    <div>
      <hr />
      <h1>Home 화면</h1>
      <h3>article{article[0].title}</h3>
    </div>
  );
};

export default HomePage;
