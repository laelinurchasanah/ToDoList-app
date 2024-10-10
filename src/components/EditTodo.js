import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditTodo = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');

  useEffect(() => {
    // Fetch the existing todo by id and populate the title
    // This is where you would fetch the data from an API or state
    setTitle(`Todo ${id}`); // Example: presetting the title
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Todo ${id} Updated to: ${title}`);
    // Save the updated todo to your state or database
  };

  return (
    <div className='edit-todo-container'>
      <h1>Edit Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Update Todo</button>
      </form>
    </div>
  );
};

export default EditTodo;
