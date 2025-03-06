import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "Valentine's Day" | "St. Patrick's Day" | "End of Spring Semester" | "Beginning of Fall Semester" | "Christmas";

export function CycleHoliday(): React.JSX.Element {
    const advanceAlphabet = (h: Holiday): Holiday => {
        switch (h) {
            case "Beginning of Fall Semester":
                return "Christmas";
            case "Christmas":
                return "End of Spring Semester";
            case "End of Spring Semester":
                return "St. Patrick's Day";
            case "St. Patrick's Day":
                return "Valentine's Day";
            case "Valentine's Day":
                return "Beginning of Fall Semester";
        }
    };

    const advanceYear = (h: Holiday): Holiday => {
        switch (h) {
            case "Valentine's Day":
                return "St. Patrick's Day";
            case "St. Patrick's Day":
                return "End of Spring Semester";
            case "End of Spring Semester":
                return "Beginning of Fall Semester";
            case "Beginning of Fall Semester":
                return "Christmas";
            case "Christmas":
                return "Valentine's Day";
        }
    };

    const getEmoji = (h: Holiday): string => {
        switch (h) {
            case "Valentine's Day":
                return "❤️";
            case "St. Patrick's Day":
                return "🍀";
            case "End of Spring Semester":
                return "🎉";
            case "Beginning of Fall Semester":
                return "📖";
            case "Christmas":
                return "❄️";
        }
    }

    const [holiday, setHoliday] = useState<Holiday>("St. Patrick's Day");

    return <div>
        <Button onClick={() => setHoliday(advanceAlphabet(holiday))}>Advance by Alphabet</Button>
        <Button onClick={() => setHoliday(advanceYear(holiday))}>Advance by Year</Button>
        <span>
            <p>Holiday: {getEmoji(holiday)}</p>
        </span>
    </div>;
}
