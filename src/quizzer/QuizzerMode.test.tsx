import React from "react";
import { render, screen } from "@testing-library/react";
import { Quizzer } from "./Quizzer";

describe("Quizzer Tests", () => {
    beforeEach(() => {
        render(<Quizzer />);
    });
    test("The Quizzer renders", () => {
        // Up to you to decide what your tests are!
        // Add more tests, more components, more test files!
    });
    test("Swiching the Quizzes displays the Displayed Quiz", () => {
        const radios: HTMLInputElement[] = screen.getAllByRole("radio");
        // Switch to first
        radios[0].click();
        const selectedQuiz = screen.getByTestId("current_Quiz");
        expect(selectedQuiz).toHaveTextContent("Quiz title:");
        // // Switch to second
        // radios[2].click();
        // selectedQuiz = screen.getByTestId("selected_Quiz");
        // expect(selectedQuiz).toHaveTextContent("Quiz title:");
        // // Switch to third
        // radios[2].click();
        // selectedQuiz = screen.getByTestId("selected_Quiz");
        // expect(selectedQuiz).toHaveTextContent("Quiz title:");
        // // Switch to first
        // radios[0].click();
        // selectedQuiz = screen.getByTestId("selected_Quiz");
        // expect(selectedQuiz).toHaveTextContent("Quiz title:");
    });
});

export const name = "Sydney";
