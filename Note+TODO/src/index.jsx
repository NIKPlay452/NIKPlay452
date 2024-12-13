import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import ToDoApp from './todo/ToDoApp';
import NoteBookApp from './note/NoteBookApp';
import './button.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  const [activeApp, setActiveApp] = useState(null);

  const handleToggleApp = (app) => {
    setActiveApp(app);
  };

  return (
    <div>
      <div className="button-container">
        <button className="purple-button" onClick={() => handleToggleApp('todo')}>ToDo App</button>
        <button className="purple-button" onClick={() => handleToggleApp('notebook')}>NoteBook App</button>
      </div>
      {activeApp === 'todo' && <ToDoApp />}
      {activeApp === 'notebook' && <NoteBookApp />}
    </div>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);