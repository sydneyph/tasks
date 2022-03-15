import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { EditorMode } from "./EditMode";
import { QuizzerMode } from "./QuizzerMode";
// importing this to handle everything about questions and answers in the quizzer
// import "./interfaces/answer";
// import "./interfaces/question";
// import "./objects";

export function Quizzer(): JSX.Element {
    const [isEditing, setIsEditing] = useState<boolean>(false); // is the constant that determins whether or not the user is in editor mode

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
