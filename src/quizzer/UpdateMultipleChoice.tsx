import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function CheckMultipleChoice({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>(options[0]);

    function updateUserAnswer(event: ChangeEvent) {
        setUserAnswer(event.target.value);
    }
    return (
        <div>
            <div>
                <Form.Group controlId="userEmotions">
                    <Form.Label>How do you feel?</Form.Label>
                    <Form.Select value={userAnswer} onChange={updateUserAnswer}>
                        {options.map((answer: string) => (
                            <option key={answer} value={answer}>
                                {answer}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <div>You currently have {userAnswer} selected.</div>
                <div>{expectedAnswer === userAnswer ? "✔️" : "❌"}</div>
            </div>
        </div>
    );
}
