// This file will hold all of the things pretaining to questions that I will use in my program
import { Question, QuestionType } from "../interfaces/quizzerQuestion";

// this will create new multiple choice questions for the user
export function makeMultipleChoice(
    id: number,
    name: string,
    type: QuestionType,
    options: string[]
): Question {
    return {
        id: id,
        name: name,
        type: type,
        body: "",
        expected: "",
        options: options,
        points: 1,
        published: true,
        answer: ""
    };
}

// this will create new short answer questions for the user
export function makeShortAnswer(
    id: number,
    name: string,
    type: QuestionType,
    answer: string
): Question {
    return {
        id: id,
        name: name,
        type: type,
        body: "",
        expected: "",
        options: [],
        points: 3,
        published: true,
        answer: answer
    };
}
