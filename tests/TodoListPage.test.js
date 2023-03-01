import { fireEvent, render, screen } from "@testing-library/react";
import React from "react"
import { act } from "@testing-library/react";
import { addTaskToApi, loadTasksFromApi } from "../src/api/http";
import TodoListPage from "../src/pages/TodoListPage";
import { BrowserRouter } from "react-router-dom";

jest.mock("../src/api/http");

it("should add a task on form submit", async () => {
    loadTasksFromApi.mockResolvedValue([
        { id: 1, text: "MOCK_TASK_1", done: false }
    ]);

    addTaskToApi.mockImplementation((task) => Promise.resolve([{ ...task, id: 2 }]))

    await act(async () => {
        await render(
            <BrowserRouter>
                <TodoListPage />
            </BrowserRouter>
        );
    });


    const itemsBeforeForm = screen.getByText("MOCK_TASK_1", { exact: false });
    expect(itemsBeforeForm).toBeTruthy();

    await act(async () => {
        await fireEvent.change(screen.getByPlaceholderText("Ajouter une tâche"), {
            target: { value: "MOCK_TASK_2" }
        });

        fireEvent.click(screen.getByText("Ajouter"));
    })
    console.log("test 1");

    const items = screen.getAllByText("MOCK_TASK", { exact: false });
    expect(items).toHaveLength(2);
})