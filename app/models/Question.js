export class Question {
    constructor(data) {
        this.difficulty = data.difficulty
        this.prompt = data.question
        this.correctAnswer = data.correct_answer
        this.incorrectAnswers = data.incorrect_answers
    }

    get questionTemplate() {
        return `<section class="row justify-content-center pb-5">
        <button class="col-10 card">${this.prompt}</button>
      </section>
      <section class="row justify-content-evenly pb-5">
        <button class="col-4 btn btn-primary">${this.correctAnswer}</button>
        <button class="col-4 btn btn-primary">${this.incorrectAnswers[0]}</button>
      </section>
      <section class="row justify-content-evenly">
        <button class="col-4 btn btn-primary">${this.incorrectAnswers[1]}</button>
        <button class="col-4 btn btn-primary">${this.incorrectAnswers[2]}</button>
      </section>
        `
    }
}