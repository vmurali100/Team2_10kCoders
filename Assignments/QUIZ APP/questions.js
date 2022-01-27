class Question{
    constructor(text,choice,answer){
        this.text = text
        this.choice = choice
        this.answer = answer
        console.log(text,choice,answer)
    }
}
let Questions =[
    new Question("Which of the following is not a Java features?",["Dynamic","Architecture Neutral","Use of pointers","Object-oriented"],"Use of Pointers"),
    new Question("The u0021 article referred to as a?",["Unicode escape sequence","Octal escape","Hexadecimal","Line feed"],"Unicode escape sequence")    
]

class Quiz{
    constructor(questions){
        this.questions = questions
        this.score = 0
        this.questionIndex = 0
        console.log(this.questions)
    }
}

Quiz.prototype.getQuestion = function(){
    return this.questions[this.questionIndex]
}

var quizObject = new Quiz(Questions)