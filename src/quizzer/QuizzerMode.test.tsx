import React from "react";
import { render, screen } from "@testing-library/react";
import { Quizzer } from "./Quizzer";
import { CheckMultipleChoice } from "./UpdateMultipleChoice";
import { CheckShortAnswer } from "./UpdateShortAnswer";
import userEvent from "@testing-library/user-event";

describe("Quizzer Tests", () => {
    beforeEach(() => {
        render(<Quizzer />);
    });
    test("The Quizzer renders", () => {
        // Up to you to decide what your tests are!
        // Add more tests, more components, more test files!
    });
    test("Making sure all of our Intiial Quizzes are Displayed", () => {
        //const listOfQuizzes = [Quiz1, Quiz2, Quiz3]; THese are the quizzes we are using in this test to make sure everything is all set
        const radios: HTMLInputElement[] = screen.getAllByRole("radio");
        // Switch to first
        radios[0].click();
        expect(screen.getByText(/Quiz Title: First Quiz/i)).toBeInTheDocument();
        // Switch to second
        radios[2].click();
        expect(
            screen.getByText(/Quiz Title: Second Quiz/i)
        ).toBeInTheDocument();
        // Switch to third
        radios[2].click();
        expect(screen.getByText(/Quiz Title: Third Quiz/i)).toBeInTheDocument();
    });
    test("Making sure the correct question display when clicking on the first Radio Button", () => {
        //const listOfQuizzes = [Quiz1, Quiz2, Quiz3]; THese are the quizzes we are using in this test to make sure everything is all set
        const radios: HTMLInputElement[] = screen.getAllByRole("radio");
        // Switch to first
        radios[0].click();
        expect(
            screen.getByText(
                /Question: What is the numerical number for the word one?/i
            )
        ).toBeInTheDocument();
    });
    test("Making sure the correct question display when clicking on the second radio button", () => {
        // Switch to second
        const radios: HTMLInputElement[] = screen.getAllByRole("radio");
        radios[1].click();
        expect(
            screen.getByText(
                /Question: How many Questions did this Quiz start out with?/i
            )
        ).toBeInTheDocument();
    });
    test("Making sure the correct question display when clicking on the third radio button", () => {
        // Switch to second
        const radios: HTMLInputElement[] = screen.getAllByRole("radio");
        radios[2].click();
        expect(
            screen.getByText(
                /Question: How many Questions did this Quiz start out with?/i
            )
        ).toBeInTheDocument();
    });
    // for these next few tests I am making sure that my Update Multiple Choice and Short answer functions are working. Options taken from Original Quizzes.
    test("The answer for the first Question is initially correct", () => {
        render(
            <CheckMultipleChoice expectedAnswer="2" options={["1", "2", "3"]} />
        );
        expect(screen.getByText(/❌/i)).toBeInTheDocument();
        expect(screen.queryByText(/✔️/i)).not.toBeInTheDocument();
    });
    test("The answer for the third question is initially incorrect", () => {
        render(
            <CheckMultipleChoice expectedAnswer="2" options={["1", "2", "3"]} />
        );
        expect(screen.getByText(/❌/i)).toBeInTheDocument();
        expect(screen.queryByText(/✔️/i)).not.toBeInTheDocument();
    });
    test("The answer for the fifth question is initially incorrect", () => {
        render(<CheckShortAnswer expectedAnswer="Sydney" />);
        expect(screen.getByText(/❌/i)).toBeInTheDocument();
        expect(screen.queryByText(/✔️/i)).not.toBeInTheDocument();
    });
    test("Entering the right answer fir the fifth question makes it correct.", () => {
        render(<CheckShortAnswer expectedAnswer="Sydney" />);
        const inputBox = screen.getByRole("textbox");
        userEvent.type(inputBox, "Sydney");
        expect(screen.getByText(/✔️/i)).toBeInTheDocument();
        expect(screen.queryByText(/❌/i)).not.toBeInTheDocument();
    });
});

export const name = "Sydney";
