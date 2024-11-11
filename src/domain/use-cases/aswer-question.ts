interface AnswerQuestionUseCaseRequest {
    instructorId: string;
    questionId: string;

}


export class AnswerQuestionUseCase {
    execute({ instructorId, questionId }: AnswerQuestionUseCaseRequest): void {

    }
}

new AnswerQuestionUseCase().execute({
    questionId: '1',
    instructorId: '2',
})