export class Question {
    constructor(data) {
        this.difficulty = data.difficulty
        this.prompt = data.question
        this.correctAnswer = data.correct_answer
        this.incorrectAnswers = data.incorrect_answers
    }

    get questionTemplate() {
        return `<p>dif: ${this.difficulty} prompt: ${this.prompt}, correct: ${this.correctAnswer}, wrong: ${this.incorrectAnswers}</p>
        `
    }
}