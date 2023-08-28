import { AppState } from "../AppState.js"
import { Question } from "../models/Question.js"

class QuestionService {
    async getQuestions(id) {

        const response = await fetch(`https://opentdb.com/api.php?amount=10&category=${id}`)
        console.log(response)
        const data = await response.json()
        console.log(data.results)
        let newQuestions = data.results.map(question => new Question(question))
        console.log(newQuestions)
        AppState.questions = newQuestions
    }
}

export const questionService = new (QuestionService)