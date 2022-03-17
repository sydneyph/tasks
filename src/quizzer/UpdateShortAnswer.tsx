import React, { useState } from "react";
import { Form } from "react-bootstrap";

// simplifing the type definition of the change event
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function CheckShortAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    // state used to handle the users inputted answer
    const [userAnswer, setUserAnswer] = useState<string>("");

    function updateShortAnswer(event: ChangeEvent) {
        setUserAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="CheckAnswer">
                <Form.Label>Insert Your Short Answer Responce Here:</Form.Label>
                <Form.Control
                    value={userAnswer}
                    onChange={updateShortAnswer}
                ></Form.Control>
            </Form.Group>
            <div>Correct: {expectedAnswer === userAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
