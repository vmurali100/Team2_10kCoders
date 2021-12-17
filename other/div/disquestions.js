function populateQuestions(){
console.log(QuizObject.getQuestionObject())
var element=document.querySelector("#question")
element.innerHTML=QuizObject.getQuestionObject().text;

var choices=QuizObject.getQuestionObject().choice;
choices.forEach((text,i)=>{
    document.querySelector("#choice"+i).innerHTML=text;
    guessAnswer("#choice"+i,text)
});
}
function guessAnswer(id,answer){
    var element=document.querySelector(id)
    element.addEventListener('click',function(){
        QuizObject.guessCorrectAnswer(answer);
            populateQuestions()
    });
}
populateQuestions()