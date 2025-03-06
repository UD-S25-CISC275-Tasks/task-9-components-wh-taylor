import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [isActive, setActive] = useState<boolean>(false);
    const startQuiz = () => {
        setAttempts(attempts - 1);
        setActive(true);
    }
    return <div>
        <Button disabled={isActive || attempts == 0} onClick={startQuiz}>Start Quiz</Button>
        <Button disabled={!isActive} onClick={() => setActive(false)}>Stop Quiz</Button>
        <Button disabled={isActive} onClick={() => setAttempts(attempts + 1)}>Mulligan</Button>
        <p>Attempts: {attempts}</p>
    </div>;
}
