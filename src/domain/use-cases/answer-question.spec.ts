import { expect, test } from "vitest";
import { AnswerQuestionUseCase } from "./aswer-question";


test('create an answer', () => {
    const answerQuestion = new AnswerQuestionUseCase()

    const answer = answerQuestion.execute({
        questionId: '1',
        instructorId: '1',
        content: 'Nova Resposta',
    })

    expect(answer.content).toBe('Nova Resposta')
})