class Question {

    /**
     * 
     * @param {string} text text of the question
     * @param {string[]} choices array of the question strings
     * @param {string} answer the answer of the question
     */

    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }


/**
 * 
 * @param {string} choice choice question text
 * @returns {boolean} return true if answer is correct
 */
    correctAnswer(choice) {
        return choice === this.answer; 
    }
}

export { Question };