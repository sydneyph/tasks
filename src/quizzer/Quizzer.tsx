import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
// importing this to handle everything about questions and answers in the quizzer
import "./interfaces/answer";
import "./interfaces/question";
import "./objects";

export function Quizzer(): JSX.Element {
    // this section holds a lot of function declarations and constants for the Quizzer Mode function

    // this section holds a lot of function declarations and constants for the Editor Mode function

    // this section holds information pretaining things pretaining to both modes as well as the declariations for both modes

    const [isEditing, setIsEditing] = useState<boolean>(false); // is the constant that determins whether or not the user is in editor mode

    function QuizzerMode(): JSX.Element {
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
                {/** Placing a map here that constins a list of questions which wil generate into Quizzer mode layout */}
                {/** Each of these will print in a little thing that satisfies above element and constin a button that says view quiz*/}
                {/** On Click, viewQuiz button will show steps listed in bullet 3 and will have an option to start the quiz, end quiz (no mulligan, not worrying about attempts)*/}
                {/** on start Quiz, the multiple choice radio buttons. Short answer has text box. These get handeled in the map. When the right answer is selected, green check. YOu cannot view other quizzes at this time. Start quiz will grab another button*/}
                {/** on stopQuiz, you will be shown brough back to the view quiz stage and the points you earned will be viewable. from here you can choose to view a different quiz*/}
            </div>
        );
    }

    function EditorMode(): JSX.Element {
        /* This element will allow the user to access particular features to edit the site
        - Users can publish or unpublish questions in a quiz 
        - Users can filter questions so that only published questions are shown (checkbox will be the thing i choose)
        - Users can edit the questions and the fields of the quiz
        - Users can add a new question for the quiz
        - Users can reprder the questions in the quiz
        - Users can add a new quiz and delete an existing quiz
        */
        return (
            <div>
                <Button>Editing Mode</Button>
                <div>establish Editing mode</div>
                {/** Placing a map here that constins a list of questions which wil generate into Quizzer mode layout */}
                {/** You can select delete quiz by pressing button. you can edit quiz by selecting a button*/}
                {/** You can play around with setting of individual questions as explained above using various buttons and interfaces*/}
            </div>
        );
    }

    return (
        <div>
            <h3>Quizzer</h3>
            <div>
                <Form.Check
                    type="switch"
                    id="edit-mode-or-quizzer-mode"
                    label="Swap Modes"
                    checked={isEditing}
                    onChange={() => setIsEditing(!isEditing)}
                />
            </div>
            {/* here we are able to swap between the editing interface and the quizzer interface*/}
            <div>{isEditing ? <EditorMode /> : <QuizzerMode />}</div>
        </div>
    );
}
