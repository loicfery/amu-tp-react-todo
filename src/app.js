import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoDetailsPage from "./pages/TodoDetailsPage";
import TodoListPage from "./pages/TodoListPage";

const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route
                path="/:id/details"
                element={<TodoDetailsPage />}
            />
            <Route
                path="/"
                element={<TodoListPage />}
            />
        </Routes>
    </BrowserRouter>
}

ReactDOM.render(<App />, document.querySelector('main'));