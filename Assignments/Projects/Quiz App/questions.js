class Question {
    constructor(text, choice, answer) {
        this.text = text;
        this.choice = choice;
        this.answer = answer
    }
}

class Quiz{
    constructor(questions){
        this.questions=questions;
        this.score=0;
        this.questionIndex=0;
    }
}

Quiz.prototype.getQuestionObject = function(){
    return this.questions[this.questionIndex]
}
let Questions = [
    new Question('Starting from the earliest hours of the day arrange these every day greetings in correct order?', ['Good Morning', 'Good Night', 'Good Afternoon', 'Good Evening'], 1),
    new Question('Arrange these Land Measurements in the Decreasing order', ['Acre', 'Hectare', 'Cent', 'Yard'], 1),
    new Question('How would you consult to know your Horoscope?', [' Astrologer', 'Astronomist', 'Economist', 'Agronomis'], 2),
    new Question(' Which of these is not a correct Equation?', ['1m = 100 cm ', '1ft = 12 Inche', '1L = 1000ml', '1kg = 100g'], 4),
    new Question("Which of the following is said to be used for the early ripening of fruits?", ['Calcium Carbide','Morpholin','Mithail Alcohol','Benjin'],1),
    new Question('Who among the following was appointed as Google CEO in this August 2015?',['Sundar Pichay','Santhanu Narayan','Satya Nadella',' Vinod Khosla',1]),
    new Question('Which of the following Film’s poster created the Guinness world record for the Biggest Film Poster?',['Bhajaranji Bhai Jann','Baahunali','Avatar','Jurassic World',2]),
    new Question('Who is known as “Missile Man of India” among the following Ex-President’s of India?',['K.R Narayanan',' R.Venkatraman','Dr.A.P.J.Abdul Kalam',' Jnani Jailsingh'],3)
];

var QuizObject =new Quiz(Questions)
console.log(QuizObject)
