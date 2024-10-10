import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-container'>
      <h1>Home Page</h1>
      <Link to="/create-todo">Create New Todo</Link>
    </div>
  );
};

export default Home;
