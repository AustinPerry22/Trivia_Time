import { AppState } from "../AppState.js"
import { Question } from "../models/Question.js"

class QuestionService {
    async getQuestions(id) {

        const response = await fetch(`https://opentdb.com/api.php?amount=10&category=${id}&type=multiple`)
        const data = await response.json()
        let newQuestions = data.results.map(question => new Question(question))
        AppState.questions = newQuestions
        console.log(AppState.questions)
    }
}

export const questionService = new (QuestionService)