import React from "react";
import { render, screen } from "@testing-library/react";
import { Quizzer } from "./Quizzer";

describe("General Quizzer Tests", () => {
    beforeEach(() => {
        render(<Quizzer />);
    });
    test("The Quizzer renders", () => {
        // Up to you to decide what your tests are!
        // Add more tests, more components, more test files!
    });
    test("Initial State Should Be Quizzer Mode", () => {
        expect(screen.getByText(/Quizzer Mode/i)).toBeInTheDocument();
    });
    test("There is a switch which can be used to swap modes", () => {
        const switchButton = screen.getByRole("checkbox");
        expect(switchButton).toBeInTheDocument();
        expect(switchButton.parentElement).toHaveClass("form-switch");
    });
    test("Can switch into Editing Mode", () => {
        const switchButton = screen.getByRole("checkbox");
        switchButton.click();
        expect(screen.getAllByRole("checkbox")).toHaveLength(1);
        expect(screen.getByText(/Edit mode/i)).toBeInTheDocument();
    });
    test("Can switch back into Quizzer Mode", () => {
        const switchButton = screen.getByRole("checkbox");
        switchButton.click();
        expect(screen.getByText(/Edit Mode/i)).toBeInTheDocument();
        switchButton.click();
        expect(screen.getByText(/Quizzer Mode/i)).toBeInTheDocument();
    });
});
