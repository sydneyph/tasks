import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function EditorMode(): JSX.Element {
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
            <div>Edit mode</div>
            <Button>Hurrah! You are In Editing Mode</Button>
            {/** Placing a map here that constins a list of questions which wil generate into Quizzer mode layout */}
            {/** You can select delete quiz by pressing button. you can edit quiz by selecting a button*/}
            {/** You can play around with setting of individual questions as explained above using various buttons and interfaces*/}
        </div>
    );
}
