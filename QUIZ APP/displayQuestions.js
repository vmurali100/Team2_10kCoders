function populateQuestions(){
    console.log(quizObject.getQuestion())
    var element = document.querySelector("#question")
    element.innerHTML = quizObject.getQuestion().text;

    var choices = quizObject.getQuestion().choice
    console.log(choices)
    choices.forEach((text,i)=>{
        document.querySelector("#choice"+i).innerHTML = text
    })
}
populateQuestions()