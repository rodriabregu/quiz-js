// @ts-check
import { Question } from "./Question.js";

export class Quiz {
    questionIndex = 0;
    score = 0;

    /**
     * 
     * @param {Question[]} questions 
     */
    constructor(questions) {
        this.questions = questions
    }

    /**
     * 
     * @returns {Question} the question found
     */
    getCount() {
        return this.questions[this.questionIndex]
    }

    isEnd() {
        return this.questions.length === this.questionIndex;
    }


    guess(answer) {
        if(this.getCount().correctAnswer(answer)) {
            this.score++
        }

        this.questionIndex++;
    }
}