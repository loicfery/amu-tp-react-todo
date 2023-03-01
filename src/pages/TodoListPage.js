import React, { useState, useEffect } from "react";
import { addTaskToApi, loadTasksFromApi, toggleTaskInApi } from "../api/http";
import TaskForm from "../components/TaskForm";
import TodoList from "../components/TodoList";

const TodoListPage = () => {
    const [state, setState] = useState([]);

    const toggle = (id) => {
        const idx = state.findIndex(task => task.id === id);
        const item = { ...state[idx]};

        toggleTaskInApi(id, !item.done).then(() => {
            item.done = !item.done;
            const stateCopy = [...state];
            stateCopy[idx] = item;
            setState(stateCopy);
        }); 
    }

    const addNewTask = (text) => {
        const task = {
            text: text,
            done: false
        };

        addTaskToApi(task).then((savedTask) => {
            setState([...state, savedTask[0]]);
        })   
    }

    useEffect(() => {
        loadTasksFromApi()
            .then((items) => {
                setState(items);
            });
        }, []
    );
    
    return <>
        <TodoList tasks={state} onTaskToggle={toggle} />
        <TaskForm onTaskAdded={addNewTask} />
    </>
}

export default TodoListPage;