import { fireEvent, render, screen } from "@testing-library/react";
import TaskForm from "../src/components/TaskForm";
import React from "react"

it("should call prop function on submit", async () => {
    const mockFunction = jest.fn();

    render(<TaskForm onTaskAdded={mockFunction} />);

    fireEvent.change(screen.getByPlaceholderText("Ajouter une tâche"), {
        target: { value: "MOCK_TEXT" }
    });

    fireEvent.click(screen.getByText("Ajouter"));

    expect(mockFunction).toHaveBeenCalledWith("MOCK_TEXT");
})