import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function Quizzer(): JSX.Element {
    // this bit of the website will determine if the user is in edit mode or quizzer mode
    const [isEditing, setIsEditing] = useState<boolean>(false);

    function QuizzerMode(): JSX.Element {
        return <Button>Quizzer Mode</Button>;
    }

    function EditorMode(): JSX.Element {
        return <Button>Editing Mode</Button>;
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
