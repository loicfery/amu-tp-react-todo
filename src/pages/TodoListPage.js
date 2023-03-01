import React from "react";
import TaskForm from "../components/TaskForm";
import TodoList from "../components/TodoList";

const TodoListPage = () => {
    return <>
        <TodoList />
        <TaskForm />
    </>
}

export default TodoListPage;