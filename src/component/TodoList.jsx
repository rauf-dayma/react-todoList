import React, { useState } from 'react';
import TodoItem from './TodoItem';
import Heading from './Heading';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { id: Date.now(), text: inputValue }]);
      setInputValue('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <div className="todo-list-container">
      <Heading />
      <div className="input-section">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a new task"
          className="todo-input"
        />
        <button className="add-btn" onClick={addTodo}>
          Add
        </button>
      </div>

      <div className="todo-items">
        {todos.length > 0 ? (
          todos.map((item) => (
            <TodoItem key={item.id} item={item} onDelete={deleteTodo} />
          ))
        ) : (
          <p className="empty-message">Your to-do list is empty!</p>
        )}
      </div>
    </div>
  );
};

export default TodoList;
