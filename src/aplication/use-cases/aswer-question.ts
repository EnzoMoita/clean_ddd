    import { Answer } from "../../domain/entities/answer";
    import { AnswerRepository } from "../../domain/repositories/answers-repository";


    interface AnswerQuestionUseCaseRequest {
        instructorId: string;
        questionId: string;
        content: string;

    }


    export class AnswerQuestionUseCase {
        constructor(
            private answersRepository: AnswerRepository,
        ){}

    async  execute({ instructorId, questionId, content }: AnswerQuestionUseCaseRequest) {
            const answer = new Answer ({
                content,
                authorId: instructorId,
                questionId,
            })

            await this.answersRepository.create(answer)

            return answer

        }
    }