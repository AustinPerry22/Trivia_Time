import { AppState } from "../AppState.js"
import { questionService } from "../services/QuestionsService.js"
import { setHTML } from "../utils/Writer.js"

function _drawQuestions() {
    let content = ''
    AppState.questions.forEach(q => {
        content += q.questionTemplate
    })
    setHTML('questions', content)
}

export class QuestionsController {
    constructor() {
        console.log('hello')
        this.getQuestions()
        AppState.on("questions", _drawQuestions)
    }
    async getQuestions() {
        questionService.getQuestions()
    }
}