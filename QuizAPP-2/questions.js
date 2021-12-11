class Question{
    constructor(text,choice,answer){
        this.text = text
        this.choice = choice
        this.answer = answer
    }
}

let questions = [
    new Question("Which of the following is not a Java features?",["Dynamic","Architecture Neutral","Use of Pointers","Object-oriented"],"Use of Pointers"),
    new Question("The u0021 article referred to as a?",["Unicode escape sequence","Octal escape","Hexadecimal","Line feed"],"Unicode escape sequence")
]
class Quiz{
    constructor(questions){
        this.questions = questions
        this.score = 0;
        this.questionIndex = 0;
    }
}

Quiz.prototype.getData = function()
{
    console.log("question index: ",this.questions[this.questionIndex])
    return this.questions[this.questionIndex]  
}

Quiz.prototype.correctAnswer = function(answer)
{
    if(this.questions[this.questionIndex].answer == answer)
    {
        console.log("You Selected Correct Answer")
        this.score++;
    }
    else
    {
        console.log("Wrong answer..")
    }
    this.questionIndex ++;
    display()
}

Quiz.prototype.isEnd = function()
{
    var len = (questions.length);
    return (len == this.questionIndex) 
}

var quizObject = new Quiz(questions)