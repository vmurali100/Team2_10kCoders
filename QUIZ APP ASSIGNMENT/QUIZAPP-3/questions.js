class Question{
    constructor(text,choice,answer){
        this.text = text
        this.choice = choice
        this.answer = answer
    }
}

let questions =[
    new Question("This person created a machine called 'The Analytical Engine.' His ideas were some of the first that led to the creation of computers. Guess the name of this person?",["Simon Konrad","Charles Babbage","John Lovelace","William Howard"],"Charles Babbage"),
    new Question("When did dr. James Naismith create basketball?",["Charles Babbage","William Zuse","Konrad Apple","Ada Lovelace"],"Ada Lovelace"),
    new Question("This person is often called the inventor of the modern computer. He actually created the first fully electronic computer. Guess the name of this person?",["Konrad Zuse","Byron Lovelace","William Gates","Steve Jobs"],"Konrad Zuse"),
    new Question("This invention was 1,000 times faster than any machine built before it. It was so big that it could fill up a house. Name that invention. ",["Apple I","ENIAC","Windows","Z3"],"ENIAC"),
    new Question("The invention of this product replaced vacuum tubes and made computers much smaller and faster. However, it was eventually replaced by another invention. Guess the name of this product",["RAM","ENIAC","Transformer","Transistor"],"Transistor"),
    new Question("Steve Jobs and Steve Wozniak built their first computer using a wooden box. Their company has grown and is still around today. The name of the company is:?",["Micro Soft","Linux","Apple","windows"],"Apple"),
    new Question("This man is known for starting the company Microsoft back in the year 1975. Since then, he has become one of the richest people in the world. What is the name of this person ?",["Steve JOBS","Bill Gates","Alexandar","Appolo"],"Bill Gates"),
    new Question("This invention helped make computers much smaller and faster. What is it called? ",["Vaccum Tube","Random Access Memory","CPU","Integrated Circuit"],"Integrated Circuit")
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
    document.getElementById("qh3").innerHTML = "You Can Restart The Quiz  "
    document.getElementById("qh3").appendChild(restartBtn)
    restartBtn.innerHTML = "Restart Quiz"
    restartBtn.setAttribute("type","button")
    restartBtn.setAttribute("onclick","restart()")
    restartBtn.style.borderRadius = "10px"
    restartBtn.style.backgroundColor ="hotpink"
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