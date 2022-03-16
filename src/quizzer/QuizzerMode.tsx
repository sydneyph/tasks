import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
    makeMultipleChoice,
    makeQuiz,
    makeShortAnswer,
    Quiz
} from "./Questions";
import { Question, QuestionType } from "../interfaces/quizzerQuestion";

export function QuizzerMode(): JSX.Element {
    // the intial Quizzes will be stored here make into let
    const Quiz1Questions = [
        makeMultipleChoice(
            1,
            "How many Questions did this Quiz start out with?",
            "multiple_choice_question",
            ["a. 1", "b. 3", "c. 5", "d. 7"]
        ),
        makeMultipleChoice(2, "What Season is it", "multiple_choice_question", [
            "summer",
            "winter",
            "fall",
            "spring"
        ]),
        makeMultipleChoice(3, "HWhat year is it?", "multiple_choice_question", [
            "2010",
            "2020",
            "2022",
            "2024"
        ]),
        makeMultipleChoice(
            4,
            "What is the weirdest word?",
            "multiple_choice_question",
            ["YEYEY", "weiurg owe", "wekjb    oew", "askdjfbqkrb"]
        ),
        makeShortAnswer(
            5,
            "Waht is the Name of the person who created this Quiz",
            "multiple_choice_question",
            "Sydney"
        )
    ];
    // for these, come back and make the points woth be the questions all added up instead of a static value 😁😁😁
    const Quiz1 = makeQuiz(
        "First Quiz",
        " This is the first quiz I made and it tests you on basic facts.",
        5,
        Quiz1Questions
    );
    // list of all quizzes make into let
    const listOfQuizzes = [Quiz1];

    const [selectedQuiz, updateSelectedQuiz] = useState<Quiz[]>(listOfQuizzes);

    // functions to print the quizzes out
    function PrintQuizzes(): JSX.Element {
        return (
            <div>
                <Form.Label>Your Quizzes</Form.Label>
                <Form.Label>
                    {listOfQuizzes.map((currentQuiz: Quiz) => (
                        <option key={currentQuiz} value={currentQuiz}>
                            {Quiz.name}
                        </option>
                    ))}
                </Form.Label>
            </div>
        );
    }
    function PrintSelectedQuizzes(question: Question): JSX.Element {
        return <div>WorkingonPrintSelectedQuiz</div>;
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
            <Button>Quizzer Mode</Button>
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
