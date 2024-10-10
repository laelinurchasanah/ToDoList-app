import React from 'react';
import { useParams } from 'react-router-dom';

const TodoDetail = () => {
  const { id } = useParams();

  // Fetch the todo details based on the ID
  return (
    <div className='todo-details-container'>
      <h1>Todo Detail</h1>
      <p>Showing details for Todo ID: {id}</p>
      {/* Display other details about the todo here */}
    </div>
  );
};

export default TodoDetail;
