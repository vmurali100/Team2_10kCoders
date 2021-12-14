function display() {
    if (quizObject.lastQuestion()) {
        console.log("Quiz Ended")
        quizObject.finalScore()
    }
    else {
        var quizData1 = quizObject.quizData()
        var element = document.getElementById("question")
        element.innerHTML = quizData1.text

        var choices = quizData1.choice
        //console.log(choices)
        choices.forEach((choice, i) => {
            document.getElementById("choice" + i).innerHTML = choice
            selectedAnswer("choice" + i, choice)
        })
    }
}
function selectedAnswer(id, choice) {
    document.getElementById(id).onclick = function () {
        quizObject.correctAnswer(choice)
    }
}
display()