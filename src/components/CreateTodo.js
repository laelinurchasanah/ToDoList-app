import React, { useState } from 'react';

const CreateTodo = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Todo Created: ${title}`);
    // Save the new todo to your state or database
  };

  return (
    <div className='create-todo-container'>
      <h1>Create Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Todo Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Create Todo</button>
      </form>
    </div>
  );
};

export default CreateTodo;
