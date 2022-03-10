import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [isEditing, setIsEditing] = useState<boolean>(false);

    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >;

    function updateName(event: ChangeEvent) {
        setName(event.target.value);
        if (name == "-0") {
            setIsStudent(true);
        }
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    type="switch"
                    id="is-edit-mode"
                    label="Editing"
                    checked={isEditing}
                    onChange={() => setIsEditing(!isEditing)}
                />
            </div>
            <div>
                {!isEditing ? (
                    <div>
                        <span>{name}</span>
                        {isStudent ? " is a student" : " is not a student"}
                    </div>
                ) : (
                    <Form.Group controlId="formPersonName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>
                )}
            </div>
        </div>
    );
}
