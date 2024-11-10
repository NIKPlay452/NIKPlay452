import { useState, useEffect } from 'react';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';
import './TodoApp.css';

function ToDoApp() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedTodos);
    }, []);

    const addTask = userInput => {
        if (userInput) {
            const newItem = {
                id: Math.random().toString(36),
                task: userInput,
                complete: false,
            };
            setTodos([...todos, newItem]);
            localStorage.setItem('todos', JSON.stringify([...todos, newItem]));
        }
    };

    const removeTask = id => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };

    const handleToggle = id => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, complete: !todo.complete } : todo
        );
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos)); 
    };

    const updateTask = (id, newText) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, task: newText } : todo
        );
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos)); 
    };

    return (
        <div className='App'>
            <header>
                <h1>Todo List</h1>
            </header>
            <ToDoForm addTask={addTask} />
            {todos.map(todo => (
                <ToDo
                    todo={todo}
                    key={todo.id}
                    toggleTask={handleToggle}
                    removeTask={removeTask}
                    updateTask={updateTask} 
                />
            ))}
        </div>
    );
}

export default ToDoApp;