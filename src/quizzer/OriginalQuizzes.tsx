import { makeMultipleChoice, makeQuiz, makeShortAnswer } from "./Questions";

export const Quiz1Questions = [
    makeMultipleChoice(
        1,
        "How many Questions did this Quiz start out with?",
        "multiple_choice_question",
        ["a. 1", "b. 3", "c. 5", "d. 7"],
        "a. 1"
    ),
    makeMultipleChoice(
        2,
        "What Season is it",
        "multiple_choice_question",
        ["summer", "winter", "fall", "spring"],
        "summer"
    ),
    makeMultipleChoice(
        3,
        "HWhat year is it?",
        "multiple_choice_question",
        ["2010", "2020", "2022", "2024"],
        "2024"
    ),
    makeMultipleChoice(
        4,
        "What is the weirdest word?",
        "multiple_choice_question",
        ["YEYEY", "weiurg owe", "wekjb    oew", "askdjfbqkrb"],
        "askdjfbqkrb"
    ),
    makeShortAnswer(
        5,
        "Waht is the Name of the person who created this Quiz",
        "multiple_choice_question",
        "Sydney"
    )
];
export const Quiz2Questions = [
    makeShortAnswer(
        1,
        "What is the numerical number for the word one?",
        "short_answer_question",
        "JAJAJ"
    ),
    makeMultipleChoice(
        2,
        "What Season is it",
        "multiple_choice_question",
        ["summer", "winter", "fall", "spring"],
        "summer"
    ),
    makeMultipleChoice(
        3,
        "HWhat year is it?",
        "multiple_choice_question",
        ["2010", "2020", "2022", "2024"],
        "2024"
    ),
    makeMultipleChoice(
        4,
        "What is the weirdest word?",
        "multiple_choice_question",
        ["YEYEY", "weiurg owe", "wekjb    oew", "askdjfbqkrb"],
        "askdjfbqkrb"
    ),
    makeShortAnswer(
        5,
        "Waht is the Name of the person who created this Quiz",
        "multiple_choice_question",
        "Sydney"
    )
];
export const Quiz4Questions = [
    makeMultipleChoice(
        1,
        "How many moons does the planet earth have?",
        "multiple_choice_question",
        ["a. 1", "b. 3", "c. 2504", "d. 124"],
        "a. 1"
    ),
    makeMultipleChoice(
        2,
        "What Season is it",
        "multiple_choice_question",
        ["summer", "winter", "fall", "spring"],
        "summer"
    ),
    makeMultipleChoice(
        3,
        "HWhat year is it?",
        "multiple_choice_question",
        ["2010", "2020", "2022", "2024"],
        "2024"
    ),
    makeMultipleChoice(
        4,
        "How am i tkaing this",
        "multiple_choice_question",
        ["ank", "askdjfbqkrb"],
        "askdjfbqkrb"
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
    Quiz2Questions
);

// for these, come back and make the points woth be the questions all added up instead of a static value 😁😁😁
export const Quiz3 = makeQuiz(
    "Third Quiz",
    " this is the thrid quiz. it has a value of 10 points and the contents are the same as the other",
    10,
    []
);
export const Quiz4 = makeQuiz(
    "Fourth Quiz",
    " this is the fourth quiz. it has a value of 10 points and the contents are the same as the other",
    10,
    Quiz4Questions
);

export const listOfQuizzes = [Quiz1, Quiz2, Quiz3, Quiz4];
