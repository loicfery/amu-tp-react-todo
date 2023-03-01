import { render, fireEvent, screen } from '@testing-library/react'
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TodoList from '../src/components/TodoList';

describe("TodoList Component", () => {
    it("should render tasks given in props", async () => {
        const tasks = [
            { id: 1, text: 'MOCK_TASK_1', done: true },
            { id: 2, text: 'MOCK_TASK_2', done: false },
        ];

        render(<BrowserRouter>
            <TodoList tasks={tasks} />
        </BrowserRouter>);

        const items = await screen.getAllByText("MOCK_TASK", { exact: false });

        expect(items).toHaveLength(tasks.length);
    })

    it("should call onTaskToggle on a click", async () => {
        const tasks = [
            { id: 1, text: 'MOCK_TASK_1', done: true },
            { id: 2, text: 'MOCK_TASK_2', done: false },
        ];

        const mockFunction = jest.fn();

        render(<BrowserRouter>
            <TodoList tasks={tasks} onTaskToggle={mockFunction} />
        </BrowserRouter>);

        fireEvent.click(screen.getByText('MOCK_TASK_1'));

        expect(mockFunction).toHaveBeenCalled();
    })
})