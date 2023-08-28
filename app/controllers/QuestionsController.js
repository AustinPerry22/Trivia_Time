import { AppState } from "../AppState.js"
import { questionService } from "../services/QuestionsService.js"
import { setHTML } from "../utils/Writer.js"

function _drawQuestion() {
    let content = AppState.activeQuestion.questionTemplate
    setHTML('questions', content)
}

export class QuestionsController {
    constructor() {
        AppState.on("activeQuestion", _drawQuestion)
    }
    async getQuestions(id) {
        questionService.getQuestions(id)
    }

    submitAnswer(answer) {
        questionService.submitAnswer(answer)
    }
}