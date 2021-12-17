class question{
    constructor(text,choice,answer){
        this.text=text;
        this.choice=choice;
        this.answer=answer

    }
}

question.prototype.getCorrectAnswer=function(){
    return this.answer;
};

class Quiz{
    constructor(questions){
        this.questions=questions;
        this.score=0;
        this.questionIndex=0;
    }
}

Quiz.prototype.getQuestionObject=function(){
    return this.questions[this.questionIndex]
};
Quiz.prototype.guessCorrectAnswer=function(answer){
if(this.getQuestionObject().getCorrectAnswer()==answer){
    this.score++;
};

this.questionIndex++;
};
let Questions=[
    new question(
    "What is the name of the state flower of Himachal Pradesh?",
    ["Wild Primula"," Dog Violet"," Pink Rhododendron","Butterfly Bush"],
    'Pink Rhododendron'
    ),
    new question(
        " In which year was the first synchronous census held in India?",
        ["1880","1881","1882","1883"],
        '1881'
        ),
    new question(
        " Which song won the song of the year 2020 at Mirchi Music Awards?",
        ["kalank","mahi ve","kesari","vaste"],
        'kalank'
        ),

];
var QuizObject=new Quiz(Questions);
console.log(QuizObject)