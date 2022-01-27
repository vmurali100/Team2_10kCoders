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

<<<<<<< HEAD
var quizObject = new Quiz(questions)

Quiz.prototype.getData = function(){
    console.log(this.questionIndex)
    document.getElementById("progress").innerText="QUESTION "+(this.questionIndex+1)+" OF" +questions.length
    return this.questions[this.questionIndex]
    
}

Quiz.prototype.correctAnswer = function(answer){
    if(this.questions[this.questionIndex].answer == answer){
        console.log("You Selected Correct Answer  ",answer)
=======
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
>>>>>>> 99b95da8d2eb7434656f63ace269193f6831d93c
        this.score++;
    }
    else
    {
        console.log("Wrong answer..")
    }
    this.questionIndex ++;
    display()
}

<<<<<<< HEAD
Quiz.prototype.isEnd = function(){
    return (questions.length == this.questionIndex)
}


Quiz.prototype.quizEnded = function(){
    document.querySelector("#quiz").style.display= "none"
    document.querySelector("#quiz1").style.display= "block"
    document.querySelector("#quiz1").innerHTML = "Your Total Score Is:"+this.score+"<br>"
    document.querySelector("#quiz1").style.backgroundColor = "powderblue"
    var btn = document.createElement("button")
    document.querySelector("#quiz1").appendChild(btn)
    btn.innerHTML = "Restart Quiz"
    btn.setAttribute("onclick","restartQuiz()")
    btn.setAttribute("type","button")
    console.log("Your Total Score Is:",this.score)
}

function restartQuiz(){
    quizObject.score = 0
    quizObject.questionIndex = 0
    document.querySelector("#quiz1").style.display= "none"
    document.querySelector("#quiz").style.display= "block"
    display()
}
=======
Quiz.prototype.isEnd = function()
{
    var len = (questions.length);
    return (len == this.questionIndex) 
}

var quizObject = new Quiz(questions)
>>>>>>> 99b95da8d2eb7434656f63ace269193f6831d93c
