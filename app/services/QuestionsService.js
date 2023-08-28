import { AppState } from "../AppState.js"
import { Question } from "../models/Question.js"

class QuestionService {
    async getQuestions(id) {

        const response = await fetch(`https://opentdb.com/api.php?amount=10&category=${id}&type=multiple`)
        const data = await response.json()
        let newQuestions = data.results.map(question => new Question(question))
        AppState.questions = newQuestions
        console.log(AppState.questions)
        AppState.activeQuestion = AppState.questions[0]
    }

    submitAnswer(answer) {
        console.log(AppState.activeQuestion)
        console.log(answer, AppState.activeQuestion.correctAnswer)
        if (answer == AppState.activeQuestion.correctAnswer) {
            window.alert('You win!')
        } else {
            window.alert('WRONG!')
        }
        console.log(AppState.questions[1], AppState.activeQuestion)
        if (AppState.questions[AppState.questions.length] == AppState.activeQuestion) {
            console.log('end of the line')
            AppState.activeQuestion = {}
        } else {
            for (let i = 0; i < AppState.questions.length; i++) {
                if (AppState.questions[i] == AppState.activeQuestion) {
                    AppState.activeQuestion = AppState.questions[i + 1]
                    console.log(AppState.activeQuestion)
                    break
                }
            }
        }
    }
}

export const questionService = new (QuestionService)