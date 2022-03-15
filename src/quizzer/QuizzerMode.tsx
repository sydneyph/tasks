import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
export function QuizzerMode(): JSX.Element {
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
