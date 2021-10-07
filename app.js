import { questions } from './data/questions.js';
import { Quiz } from './models/Quiz.js';
import { UI } from './models/UI.js';

/**
 * 
 * @param {Quiz} quiz main obj quiz
 * @param {ui} ui iu obj
 */
const renderPage = (quiz, ui) => {
    if(quiz.isEnd()) return ui.showScores(quiz.score);

    ui.showQuestion(quiz.getCount().text);
    ui.showChoices(quiz.getCount().choices, (currentChoice) => { 
        quiz.guess(currentChoice)
        renderPage(quiz, ui)
    })
    ui.showProgress(quiz.questionIndex +1, questions.length)
};

function main () {
    const quiz = new Quiz(questions);
    const ui = new UI();
    renderPage(quiz, ui);
};

main();