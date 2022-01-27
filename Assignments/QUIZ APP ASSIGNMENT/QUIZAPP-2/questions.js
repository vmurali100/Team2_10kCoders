class Question{
    constructor(text,choice,answer){
        this.text = text
        this.choice = choice
        this.answer = answer
    }
}

let questions =[
    new Question("In which sport are two teams of 6 players needed?",["Hockey","VolleyBall","Cricket","FootBall"],"VolleyBall"),
    new Question("When did dr. James Naismith create basketball?",["November 1891","December 1981","December 1989","November 1992"],"December 1981"),
    new Question("In which sport do a person try to hit balls into a hole?",["Golf","Throw Ball","Jovlin","Tennis"],"Golf"),
    new Question("Where was the first primitive ski which dating back to 2500 or 4500 B.C found?",["In Australia","In Sweden","In Germany","In Japan"],"In Sweden"),
    new Question("Where was handball born?",["In middle France","Hare","In Italy","In America"],"In middle France")
]

class Quiz{
    constructor(questions){
        this.questions = questions
        this.score = 0
        this.questionIndex = 0
    }
}
var quizObject = new Quiz(questions)

Quiz.prototype.quizData = function(){
    console.log(questions)
    return this.questions[this.questionIndex]
}

Quiz.prototype.correctAnswer = function(choice){
    if(this.questions[this.questionIndex].answer == choice){
        this.score++
        document.getElementById("h2").style.display = "block"
        document.getElementById("h2").innerHTML = "Your Answer Is Correct     "+"<br>"
        var btn = document.createElement("button")
        document.getElementById("h2").appendChild(btn)
        btn.innerHTML = "Next Question"
        btn.setAttribute("type","button")
        btn.style.backgroundColor="lightgreen"
        btn.setAttribute("onclick","nextQuestion()")
        btn.style.borderRadius = "10px"
        document.querySelector(".button").style.display = "none"
        document.querySelector("#question").style.display = "none"
    }
    else{
        document.getElementById("h2").style.display = "block"
        document.getElementById("h2").innerHTML = "Your Answer Is Wrong.Correct Answer is:"+this.questions[this.questionIndex].answer+"<br>"
        var btn1 = document.createElement("button")
        document.getElementById("h2").appendChild(btn1)
        btn1.innerHTML = "Next Question"
        btn1.setAttribute("type","button")
        btn1.setAttribute("onclick","nextQuestion()")
        btn1.style.backgroundColor="red"
        btn1.style.borderRadius = "10px"
        document.querySelector(".button").style.display = "none"
        document.querySelector("#question").style.display = "none"
    }
    
}

function nextQuestion(){
    document.querySelector(".button").style.display = "block"
    document.querySelector("#question").style.display = "block"
    quizObject.questionIndex++;
    document.getElementById("h2").innerHTML = "SELECT YOUR ANSWER"
    display()
}

Quiz.prototype.lastQuestion = function(){
    return quizObject.questionIndex == quizObject.questions.length
}

Quiz.prototype.displayScore = function(){
    document.getElementById("quiz").style.display = "none"
    document.getElementById("quiz1").style.display ="block"
    document.getElementById("qh2").innerHTML = "You Completed Your Quiz Succesfully.The Total Score is:"+quizObject.score+"<br>"
    var restartBtn = document.createElement("button")
    document.getElementById("qh2").appendChild(restartBtn)
    restartBtn.innerHTML = "Restart Quiz"
    restartBtn.setAttribute("type","button")
    restartBtn.setAttribute("onclick","restart()")
    restartBtn.style.borderRadius = "10px"
    restartBtn.style.backgroundColor ="blue"
    document.getElementById("quiz1").style.textAlign ="center"
    document.getElementById("quiz1").style.height = "100%"
}

function restart(){
    document.getElementById("quiz1").style.display = "none"
    quizObject.questionIndex = 0
    quizObject.score = 0
    document.getElementById("quiz").style.display = "block"
    display()
}