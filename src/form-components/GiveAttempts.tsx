import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function GiveAttempts(): JSX.Element {
    const [numberAttempts, setNumberAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<number>(0);

    function updateRequestedAttempts(event: ChangeEvent) {
        setRequestedAttempts(parseInt(event.target.value));
    }

    function addRequests() {
        setNumberAttempts(requestedAttempts);
    }

    function subtractRequests() {
        setNumberAttempts(numberAttempts - 1);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="ForNumberAttempts">
                <div>Attempts Left:</div>
                You have {numberAttempts} attempts left.
            </Form.Group>
            <Form.Group controlId="UseButton">
                <Form.Label column sm={2}>
                    Request Attempts:{" "}
                </Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={updateRequestedAttempts}
                ></Form.Control>
                <Col>
                    <Button value={numberAttempts} onClick={addRequests}>
                        gain
                    </Button>
                </Col>
            </Form.Group>
            <Form.Group controlId="ReduceButton">
                <Form.Label column sm={2}>
                    Request Attempts:{" "}
                </Form.Label>
                <Col>
                    <Button
                        value={numberAttempts}
                        onClick={subtractRequests}
                        disabled={numberAttempts === 0}
                    >
                        use
                    </Button>
                </Col>
            </Form.Group>
        </div>
    );
}
