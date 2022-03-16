import { makeMultipleChoice, makeQuiz, makeShortAnswer } from "./Questions";

export const Quiz1Questions = [
    makeMultipleChoice(
        1,
        "How many Questions did this Quiz start out with?",
        "multiple_choice_question",
        ["a. 1", "b. 3", "c. 5", "d. 7"]
    ),
    makeMultipleChoice(2, "What Season is it", "multiple_choice_question", [
        "summer",
        "winter",
        "fall",
        "spring"
    ]),
    makeMultipleChoice(3, "HWhat year is it?", "multiple_choice_question", [
        "2010",
        "2020",
        "2022",
        "2024"
    ]),
    makeMultipleChoice(
        4,
        "What is the weirdest word?",
        "multiple_choice_question",
        ["YEYEY", "weiurg owe", "wekjb    oew", "askdjfbqkrb"]
    ),
    makeShortAnswer(
        5,
        "Waht is the Name of the person who created this Quiz",
        "multiple_choice_question",
        "Sydney"
    )
];
// for these, come back and make the points woth be the questions all added up instead of a static value 😁😁😁
export const Quiz1 = makeQuiz(
    "First Quiz",
    " This is the first quiz I made and it tests you on basic facts.",
    5,
    Quiz1Questions
);

// for these, come back and make the points woth be the questions all added up instead of a static value 😁😁😁
export const Quiz2 = makeQuiz(
    "Second Quiz",
    " This is the second quiz. its contents are the same as the others",
    2,
    Quiz1Questions
);

// for these, come back and make the points woth be the questions all added up instead of a static value 😁😁😁
export const Quiz3 = makeQuiz(
    "ThirdQuiz",
    " this is the thrid quiz. it has a value of 10 points and the contents are the same as the other",
    10,
    Quiz1Questions
);
