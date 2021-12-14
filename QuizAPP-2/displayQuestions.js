function display(){
    if(quizObject.isEnd()){
        console.log("Quiz is Completed")
        quizObject.quizEnded()
    }
    else{
        var quizData =  quizObject.getData()
    var displayQuestion = document.getElementById("question")
    displayQuestion.innerText = quizData.text //or quizObject.getData().text

    var choices = quizData.choice
    choices.forEach((option,i)=>{
        document.getElementById("choice"+i).innerText = option
        participantAnswer("choice"+i,option)
        
    })
    function participantAnswer(id,option){
    document.getElementById(id).onclick=function()
    { 
    
        quizObject.correctAnswer(option) 
    }
    }
    }
   
}
display()
