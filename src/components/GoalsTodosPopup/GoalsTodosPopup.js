import React, { useState } from 'react';
import './GoalsTodosPopup.css';

function GoalsTodosPopup({ onClose }) {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: false },
    { id: 3, text: 'Task 3', completed: false },
  ]);

  const handleTodoToggle = (todoId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const remainingTodos = todos.filter((todo) => !todo.completed);

  return (
    <>
      <div className="popup-overlay" onClick={onClose}></div>
      <div className="goals-todos-popup">
        <div className="popup-header">
          <h2>Goals and To-dos</h2>
          <div className="close-icon" onClick={onClose}>
            X
          </div>
        </div>
        <div className="todos-list">
          {remainingTodos.map((todo) => (
            <div className="todo-item" key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleTodoToggle(todo.id)}
              />
              <label className={todo.completed ? 'completed' : ''}>
                {todo.text}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default GoalsTodosPopup;
