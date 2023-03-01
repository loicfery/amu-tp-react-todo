import React, { useState } from "react";

const TaskForm = (props) => {
    const [text, setText] = useState('');

    const updateText = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onTaskAdded(text);
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