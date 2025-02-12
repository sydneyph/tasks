//import Q from "q";
//import { ListGroup } from "react-bootstrap";
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const publishedArray = questions.filter(
        (question: Question): boolean => question.published
    );
    return publishedArray;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const nonEmptyQuestions = questions.filter(
        (question: Question): boolean =>
            question.body !== "" ||
            question.expected !== "" ||
            question.options.length !== 0
    );
    return nonEmptyQuestions;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const questionPresent = questions.find(
        (question: Question): boolean => id == question.id
    );
    if (questionPresent == null) {
        return null;
    } else {
        return questionPresent;
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const filterID = questions.filter(
        (question: Question): boolean => question.id != id
    );
    return filterID;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const justQuestions = questions.map(
        (question: Question): string => question.name
    );
    return justQuestions;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const sum = questions.reduce(
        (currentTotal: number, question: Question): number =>
            currentTotal + question.points,
        0
    );
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const publishedQuestions = questions.filter(
        (question: Question): boolean => question.published
    );
    const sum = publishedQuestions.reduce(
        (currentTotal: number, question: Question): number =>
            currentTotal + question.points,
        0
    );
    return sum;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const header = "id,name,options,points,published\n";
    const ContentsStrings = questions.map(
        (question: Question): string =>
            question.id +
            "," +
            question.name +
            "," +
            question.options.length +
            "," +
            question.points +
            "," +
            question.published
    );
    const joinedStrings = ContentsStrings.join("\n");
    return header + joinedStrings;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    let Answer = { questionId: 0, text: "", submitted: false, correct: false };
    const Answers = questions.map(
        (question: Question): Answer =>
            (Answer = { ...Answer, questionId: question.id })
    );
    return Answers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const publishAll = questions.map(
        (question: Question): Question =>
            (question = { ...question, published: true })
    );
    return publishAll;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const filteredTypes = questions.filter(
        (question: Question): boolean => question.type === questions[0].type
    );
    if (filteredTypes.length != questions.length) {
        return false;
    } else {
        return true;
    }
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const newQuestion = makeBlankQuestion(id, name, type);
    const returnQuestions = [...questions, newQuestion];
    return returnQuestions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const targetIdNewName = questions.map(
        (question: Question): Question =>
            question.id == targetId ? { ...question, name: newName } : question
    );
    return targetIdNewName;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const changeType = questions.map(
        (question: Question): Question =>
            question.id == targetId
                ? { ...question, type: newQuestionType }
                : question
    );
    const UpdateOptions = changeType.map(
        (question: Question): Question =>
            question.id == targetId &&
            newQuestionType != "multiple_choice_question"
                ? { ...question, options: [] }
                : question
    );
    return UpdateOptions;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
) {
    if (targetOptionIndex == -1) {
        const changeType = questions.map(
            (question: Question): Question =>
                question.id == targetId
                    ? { ...question, options: [...question.options, newOption] }
                    : question
        );
        return changeType;
    } else {
        /// I need to figure out how I am going to insert a value at the given Index4
        const properQuestion = questions.filter(
            (question: Question): boolean => question.id === targetId
        );
        const QuestionOptions = [...properQuestion[0].options];
        QuestionOptions[targetOptionIndex] = newOption;
        const changeType = questions.map(
            (question: Question): Question =>
                question.id === targetId
                    ? { ...question, options: QuestionOptions }
                    : question
        );
        return changeType;
    }
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const questionsDupe = [...questions];
    // we are going ot find the target ID
    const dupeOriginal = questions.filter(
        (question: Question): boolean => question.id === targetId
    );
    // our question is still in an array so we need to take it out
    const dupeQuestionHolder = dupeOriginal[0];
    // creating the duplicate
    const dupe = duplicateQuestion(newId, dupeQuestionHolder);
    // finding the original index for the question
    const originalIndex = questions.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    // inserting into our new array
    questionsDupe.splice(originalIndex + 1, 0, dupe);
    return questionsDupe;
}
