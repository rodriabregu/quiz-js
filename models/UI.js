export class UI {
    constructor() { }

    /**
     * @param {string} text question to rend
     */
    showQuestion(text) {
        const questionTitle = document.getElementById('question');
        questionTitle.innerHTML = text;
    };

    /**
     * 
     * @param {string[]} choices the choices questions
     */
    showChoices(choices, callback) {
        const choicesContainer = document.getElementById('choices');
        choicesContainer.innerHTML = ''

        for (let i = 0; i < choices.length; i++) {
            const button = document.createElement('button')
            button.innerText = choices[i];
            button.className = 'button';
            button.addEventListener('click', () => callback(choices[i]))
            choicesContainer.append(button)
        }
    };

    /**
     * 
     * @param {number} score total score number
     */
    showScores(score) {
        const quizEndHTML = `
        <h1>Result</h1>
        <h2>Your score: ${score}</h2>
        ${score === 3 ? 'Todo un trolaso sape!' : 'Trolaso pero no tanto'}
        `
        const element = document.getElementById('quiz');
        element.innerHTML = quizEndHTML;
    };

    /**
     * 
     * @param {number} currentIndex current index of the quiz
     * @param {number} total total question
     */
    showProgress(currentIndex, total) {
        const element = document.getElementById('progress')
        element.innerHTML = `Question ${currentIndex} of ${total}`;
    };
};