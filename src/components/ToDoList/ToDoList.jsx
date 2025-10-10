'use client';
import { BASE, fetchTodos, createTodos, updateTodos, deleteTodos } from '../../api';
import './ToDoList.css';
import { useEffect, useState } from "react";
import { taskData } from "./taskData";
import { getData } from './getData';

export default function ToDoList() {
    const [loading, setLoading] = useState(true);
    
    const [tasksList, setTask] = useState(taskData);
    const [apiData, setApiData] = useState([]);
    const [error, setError] = useState(null);
    
    const [inputValue, setInputValue] = useState("");

    function handleInputChange(e) {
        setInputValue(e.target.value);
    }

    function addTask() {
        if (inputValue.trim() !== "") {
            const newTask = {
                id: crypto.randomUUID(),
                name: inputValue,
                completed: false,
            }
            setTask([...tasksList, newTask]);
            setInputValue("");
        }
    }

    function completeTaskToggle(id) {
        // Complete task by adding a line through the text
        const newTasks = tasksList.map((task) =>
            task.id === id ? {...task, completed: !task.completed} : task
        );
        setTask(newTasks);
     }

    function deleteTask(id) {
        const newTasks = tasksList.filter(task => task.id !== id);
        setTask(newTasks);
    }


    // fetch data
    useEffect(() => {
        (async () => {
        try {
        const data = await getData();
        const list = Array.isArray(data) ? data : [data];
        setApiData(list);

        // Use .map() to transform the API data into the correct format
        const newTodoItems = list.map(apiItem => ({
        name: apiItem.title,
        id: apiItem.id,
        completed: false, // Set a default value for the new property
        }));
        setTask([...tasksList, ...newTodoItems]);

        } catch (err) {
            setError(err);
        } finally {
            // any cleanup or final steps
            setLoading(false);
        }
        })();

    }, []);

    if (error) return <div>Error: {error.message}</div>;
    // If task is completed, do not display the complete button, only display the incomplete button. 
    return (
        <div className="task-app">
            <h1>To-Do List</h1>
            <input
                className="task-form-input"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter a new task"
            /><button onClick={addTask} className="task-form-button">Add Task</button>
            
            <ul className="task-list">
                {tasksList.map((task) => (
                    <li key={task.id} >
                        <span className="text">{task.completed ? <s>{task.name}</s> : task.name}</span>
                        <button className="complete-button" onClick={() => completeTaskToggle(task.id)}>Toggle Complete</button>

                        <button className="delete-button" onClick={() => deleteTask(task.id)}>Delete Task</button>
                    </li>
                ))}
            </ul>
        </div>
    );

};

