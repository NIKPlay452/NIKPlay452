import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import ToDoApp from './todo/ToDoApp';
import NoteBookApp from './note/NoteBookApp';
import './button.css';
import './button.css'; // Добавим новый файл для стилей

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  const [activeApp, setActiveApp] = useState('todo'); // Состояние для отслеживания активного приложения

  const handleToggleApp = (app) => {
    setActiveApp(app);
  };

  return (
    <div>
      <div className="button-container">
        <button className="purple-button" onClick={() => handleToggleApp('todo')}>ToDo App</button>
        <button className="purple-button" onClick={() => handleToggleApp('notebook')}>NoteBook App</button>
      </div>
      {activeApp === 'todo' ? <ToDoApp /> : <NoteBookApp />}
    </div>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);