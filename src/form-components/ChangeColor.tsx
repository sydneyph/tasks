import React, { useState } from "react";
import { Form } from "react-bootstrap";

const BLUES = [
    "Azure",
    "Aliceblue",
    "Aquamarine",
    "Aqua",
    "LightBlue",
    "Blue",
    "MediumBlue",
    "DarkBlue",
    "MidnightBlue",
    "PaleTurquoise",
    "Turquoise",
    "MediumTurquoise",
    "DarkTurquoise",
    "Teal",
    "CornflowerBlue",
    "DeepSkyBlue",
    "DodgerBlue",
    "LightCyan",
    "LightSkyBlue",
    "SkyBlue",
    "LightSteelBlue",
    "SteelBlue",
    "PowderBlue",
    "RoyalBlue"
];

export function ChangeColor(): JSX.Element {
    const [currentColor, setColor] = useState<string>(BLUES[0]);

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                <div
                    data-testid="colored-box"
                    style={{ backgroundColor: currentColor }}
                >
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
