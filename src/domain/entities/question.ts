import { randomUUID } from "node:crypto"

interface QuestionDataProps {
    title: string,
     content: string, 
     authorId: string,
}

export class Question {
    public title: string
    public content: string
    public id: string
    public authorId: string

    constructor( props: QuestionDataProps, id?: string,) {
        this.title = props.title
        this.content = props.content
        this.authorId = props.authorId
        this.id = id ?? randomUUID()

    }
}