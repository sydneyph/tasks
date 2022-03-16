import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { makeMultipleChoice, makeQuiz, makeShortAnswer } from "./Questions";
import { Question, QuestionType, Quiz } from "../interfaces/quizzerQuestion";
import { updateSourceFile } from "typescript";
import { Quiz1, Quiz2, Quiz3 } from "./OriginalQuizzes";

export function QuizzerMode(): JSX.Element {
    // list of all quizzes make into let
    const listOfQuizzes = [Quiz1, Quiz2, Quiz3];

    const [selectedQuizName, updateSelectedQuizName] = useState<string>();

    // functions to print the quizzes out
    function PrintQuizzes(): JSX.Element {
        // i want this function to print all of the quizzes Titles, descriptions and how many questions the quiz has.
        // it will also ceate a button for each quiz that will allow you to view the quiz
        //currentQuiz.name + " Description: " + currentQuiz.description;
        return (
            <div>
                <Form.Label>Your Quizzes</Form.Label>
                <Form.Label>
                    Select the Radio Button next to the quiz to view it.
                </Form.Label>
                {listOfQuizzes.map((currentQuiz: Quiz) => (
                    <Form.Check
                        key={currentQuiz.name}
                        type="radio"
                        name={currentQuiz.name}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => updateSelectedQuizName(event.target.value)}
                        id={"current-Quiz-" + currentQuiz.name}
                        label={
                            <span
                                style={{
                                    backgroundColor: "paleturquoise",
                                    color: "grey"
                                }}
                            >
                                {"Quiz title: "} {currentQuiz.name}{" "}
                                {"        Description: "}
                                {currentQuiz.description}{" "}
                                {"    Points you can earn: "}{" "}
                                {currentQuiz.pointsWorth}
                                {selectedQuizName === currentQuiz.name
                                    ? viewQuiz()
                                    : " "}
                            </span>
                        }
                        value={currentQuiz.name}
                        checked={currentQuiz.name === selectedQuizName}
                    />
                ))}
            </div>
        );
    }
    function viewQuiz(): JSX.Element {
        // this functions prints more info about the quiz including the questions names, bodies and points
        return (
            <div data-testid="colored-box" style={{ backgroundColor: "azure" }}>
                The current color is{" "}
                <span style={{ backgroundColor: "azure", color: "grey" }}>
                    {"I am calling View Quiz"}
                </span>
            </div>
        );
    }
    /* This element will allow to access the quizzer portion of the site
        - Users can see the list of Quizzes. Will include the Title, description and how many questions the quiz has
        - Once a quiz has been selected, A user can look at questions in the quiz including question name, body and points. 
        - Quiz Questions can be short answer or multiple choice
        - Users can choose an answer for the quiz and see if they are correct
        - Users can see the total points they have earned
        */
    return (
        <div>
            <div>establish QuizzerMode</div>
            <PrintQuizzes />
            {/** Placing a map here that constins a list of questions which wil generate into Quizzer mode layout */}
            {/** Each of these will print in a little thing that satisfies above element and constin a button that says view quiz*/}
            {/** On Click, viewQuiz button will show steps listed in bullet 3 and will have an option to start the quiz, end quiz (no mulligan, not worrying about attempts)*/}
            {/** on start Quiz, the multiple choice radio buttons. Short answer has text box. These get handeled in the map. When the right answer is selected, green check. YOu cannot view other quizzes at this time. Start quiz will grab another button*/}
            {/** on stopQuiz, you will be shown brough back to the view quiz stage and the points you earned will be viewable. from here you can choose to view a different quiz*/}
        </div>
    );
}