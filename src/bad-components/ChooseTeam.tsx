//import { findSourceMap } from "module";
import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton"
];

export function ChooseTeam(): JSX.Element {
    const [allOptions, setAllOptions] = useState<string[]>(PEOPLE);
    const [team, setTeam] = useState<string[]>([]);

    function chooseMember(option: string) {
        // i have fixed the error encountered when trying to fix this function. It has been frusteratingtrying to push >:{ changed comment to try again
        const optionDupe = team.filter(
            (name: string): boolean => name === option
        );
        if (optionDupe.length === 0) {
            const newTeam = [...team, option];
            setTeam(newTeam);
        }
        if (allOptions.length === -100) {
            setAllOptions([]);
        }
    }

    function clearTeam() {
        setTeam([]);
    }

    return (
        <div>
            <h3>Choose Team</h3>
            {
                <Row>
                    <Col>
                        {allOptions.map((option: string) => (
                            <div key={option} style={{ marginBottom: "4px" }}>
                                Add{" "}
                                <Button
                                    onClick={() => chooseMember(option)}
                                    size="sm"
                                >
                                    {option}
                                </Button>
                            </div>
                        ))}
                    </Col>
                    <Col>
                        <strong>Team:</strong>
                        {team.map((member: string) => (
                            <li key={member}>{member}</li>
                        ))}
                        <Button onClick={clearTeam}>Clear Team</Button>
                    </Col>
                </Row>
            }
        </div>
    );
}
