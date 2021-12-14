class Question{
    constructor(text,choice,answer){
        this.text = text
        this.choice = choice
        this.answer = answer
    }
}

let questions =[
    new Question("What is the first thing a caterpillar usually eats after it wass born?",["other bugs","Grass","Own Egg Shell","None of the Above"],"Own Egg Shell"),
    new Question("The trumpeter swan—North Americas largest waterfowl—weighs about how many pounds?",["10","30","50","70"],"10"),
    new Question("Which of the following animals is not nocturnal?",["Sheep","Skunk","Leopard","Tiger"],"Sheep"),
    new Question("Walruses can eat about how many clams in one day?",["10,000","20,000","5,000","3,000"],"5,000"),
    new Question("What is a baby rabbit called?",["Doe","Hare","Kit","Buck"],"Kit"),
    new Question("How many koalas stacked on top of one another does it take to reach the height of a male giraffe—the world tallest land animal?",["2","4","7","50"],"7")
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
    document.getElementById("progress").innerHTML="Question "+(this.questionIndex+1)+"of "+questions.length
    return this.questions[this.questionIndex]   
}
 
Quiz.prototype.correctAnswer = function(choice){
    if(this.questions[this.questionIndex].answer == choice){
        console.log("You selected Correct Answers")
        this.score++
    }
    else{
        console.log("You selected Wrong answer.Correct Answer is:"+this.questions[this.questionIndex].answer)
    }
    this.questionIndex++
    display()
    
}

Quiz.prototype.lastQuestion = function(){
    return this.questionIndex == this.questions.length
}
Quiz.prototype.finalScore = function(){
    document.getElementById("quiz").style.display = "none"
    document.getElementById("quiz1").style.display = "block"
    document.getElementById("quiz1").innerHTML = "QUIZ IS COMPLETED WITH SCORE OF:"+this.score+"<br>"
    document.querySelector("#quiz1").style.backgroundColor = "powderblue"
    document.getElementById("quiz1").style.textAlign = "center"
    document.getElementById("quiz1").style.paddingTop = "100px"
    document.getElementById("quiz1").style.boxSizing= "border-box"
    document.querySelector("#quiz1").style.height = "100%"
    var btn = document.createElement("button")
    document.querySelector("#quiz1").appendChild(btn)
    btn.innerHTML = "Restart Quiz"
    btn.setAttribute("onclick","restartQuiz()")
    btn.setAttribute("type","button")
    btn.setAttribute("class","btn btn-success")
    console.log("Your Total Score Is:",this.score)
}