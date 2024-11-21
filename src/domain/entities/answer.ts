import { randomUUID } from "node:crypto"

interface AnswerDataProps {
    content: string,
     authorId: string, 
     questionId: string, 
}

export class Answer {
    public content: string
    public id: string
    public authorId: string
    public questionId: string

    constructor( props: AnswerDataProps, id?: string) {
        this.content = props.content
        this.id = id ?? randomUUID()
        this.authorId = props.authorId
        this.questionId = props.questionId
    }


}