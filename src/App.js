import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import CreateTodo from './components/CreateTodo';
import EditTodo from './components/EditTodo';
import TodoDetail from './components/TodoDetail';
import './index.css'

function App() {
  return (
    <Router>
      <div className='home'>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create-todo">Create Todo</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-todo" element={<CreateTodo />} />
          <Route path="/edit-todo/" element={<EditTodo />} />
          <Route path="/todo/" element={<TodoDetail />} />
        </Routes>
      </div>

      <div className='notes'>
        <p>Notes: Untuk melihat tampilan edit to do list jalankan: http://localhost:3000/todo-edit. <br/>Untuk menampilkan to to list jalankan: http://localhost:3000/todo </p>
      </div>
    </Router>
  );
}


export default App;
