import React, { useState } from "react";

const TaskForm = () => {
    const [text, setText] = useState('');

    const updateText = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const task = {
            id: Date.now(),
            text: text,
            done: false
        };

        setState([...state, task]);
    }
    return <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="todo-text"
            placeholder="Ajouter une tâche"
            onChange={updateText}
            value={text}
        />
        <button>Ajouter</button>
    </form>
}

export default TaskForm;