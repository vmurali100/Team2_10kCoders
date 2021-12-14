function display(){
   if(quizObject.lastQuestion()){
        quizObject.displayScore()
   } 
   else{
    document.getElementById("question").innerText = quizObject.quizData().text
    document.getElementById("progress").innerHTML = "Question "+(quizObject.questionIndex+1 +"of "+quizObject.questions.length)
    var choices = quizObject.quizData().choice
    choices.forEach((choice,i)=>{
        document.getElementById("choice"+i).innerHTML = choice
        selectedAnswer("choice"+i,choice)
    })
   }
   
    }
function selectedAnswer(id,choice){
    document.getElementById(id).onclick = function(){
        quizObject.correctAnswer(choice)
    }
}
display()