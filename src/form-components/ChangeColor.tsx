import React, { useState } from "react";
import { Form } from "react-bootstrap";

const BLUES = [
    "Aqua",
    "Aliceblue",
    "Azure",
    "Aquamarine",
    "Blue",
    "DarkBlue",
    "CornflowerBlue",
    "MidnightBlue",
    "DarkTurquoise",
    "DeepSkyBlue",
    "DodgerBlue"
];

export function ChangeColor(): JSX.Element {
    const [currentColor, setColor] = useState<string>(BLUES[0]);

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                <div>
                    The current color is{" "}
                    <span
                        style={{ backgroundColor: currentColor, color: "grey" }}
                    >
                        {currentColor}
                    </span>
                </div>
                {BLUES.map((color: string) => (
                    <Form.Check
                        key={color}
                        inline
                        type="radio"
                        name="colors"
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setColor(event.target.value)}
                        id={"colors-choice-" + color}
                        label={
                            <span
                                style={{
                                    backgroundColor: color,
                                    color: "grey"
                                }}
                            >
                                {color}
                            </span>
                        }
                        value={color}
                        checked={color === currentColor}
                    />
                ))}
            </div>
        </div>
    );
}
