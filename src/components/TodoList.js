import React, { useState } from "react";
import TaskForm from "./TaskForm.js";

const TODO_ITEMS = [
    { id: 1, text: "Faire les courses", done: false },
    { id: 2, text: "Aller chercher les enfants", done: true },
];

const TodoList = () => {
    const [state, setState] = useState(TODO_ITEMS);

    const toggle = (id) => {
        const idx = state.findIndex(task => task.id === id);
        const item = { ...state[idx], done: !state[idx].done };
        const stateCopy = [...state];
        stateCopy[idx] = item;
        setState(stateCopy);
    };

    return <>
        <ul>
            {state.map(item => <li key={item.id}>
                <label>
                    <input type="checkbox" id="todo-${item.id}" checked={item.done} onChange={() => toggle(item.id)} />
                    {item.text}
                </label>
            </li>)}
        </ul>

        <TaskForm/>
    </>;
}

export default TodoList;