class Questions{
    constructor(text,choice,answer)
    {
        this.text =text;
        this.choice =choice;
        this.answer = answer;
    }
}
var questions = questions = [
    new Questions("How many Players are there in a Cricket team ?",["10","11","9","5"],"11"),
    new Questions("How Many formats are there in Cricket ?",["4","3","2","1"],"3"),
    new Questions("Which of these countries does not play cricket test cricket ?",["Brazil","New Zealand","South Africa","Sri Lanka"],"Brazil"),
    new Questions("Which teams is The Ashes series played between ?",["England vs Australia","India vs South Africa","Austrlia vs New Zealand","Bangladesh vs Afghanistan"],"England vs Australia"),
    new Questions("What is the colour of the ball in 20 overs format ?",["Red","White","Blue","Brown"],"White"),
    new Questions("How many Times has India won the world cup ?",["4","3","2","1"],"2"),
    new Questions("Which of these Teams has never Won the World Cup ?",["England","Austalia","Sri Lanka","New Zealand"],"New Zealand"),
    new Questions("Who holds the record for the highest individual score in an ODI?",["Chris Gayle","Rohit Sharma","Sachin Tendulkar","Herschelle Gibbs"],"Rohit Sharma"),
    new Questions("In which part of the world would you find the Wankhede Stadium?",["India","Sri Lanka","Zimbabwe","South Africa"],"India"),
    new Questions("What does DRS stand for?",["Decision Review System","Decision Review Scenario","Decision Review State","Decision Relief System"],"Decision Review System")
];
let webDevelopment = [];
let cricket = [];
// let cricket = [
//     new Questions("",["","","",""],""),
//     new Questions("",["","","",""],""),
//     new Questions("",["","","",""],""),
//     new Questions("",["","","",""],""),
//     new Questions("",["","","",""],""),
//     new Questions("",["","","",""],""),
//     new Questions("",["","","",""],""),
//     new Questions("",["","","",""],""),
//     new Questions("",["","","",""],""),
//     new Questions("",["","","",""],"")
// ]
// let cricket = [
//     new Questions("",["","","",""],""),
//     new Questions("",["","","",""],""),
//     new Questions("",["","","",""],""),
//     new Questions("",["","","",""],""),
//     new Questions("",["","","",""],""),
//     new Questions("",["","","",""],""),
//     new Questions("",["","","",""],""),
//     new Questions("",["","","",""],""),
//     new Questions("",["","","",""],""),
//     new Questions("",["","","",""],"")
// ]
// let cricket = [
//     new Questions("",["","","",""],""),
//     new Questions("",["","","",""],""),
//     new Questions("",["","","",""],""),
//     new Questions("",["","","",""],""),
//     new Questions("",["","","",""],""),
//     new Questions("",["","","",""],""),
//     new Questions("",["","","",""],""),
//     new Questions("",["","","",""],""),
//     new Questions("",["","","",""],""),
//     new Questions("",["","","",""],"")
// ]
// function topic()
// {
//     var select = document.getElementById("selectedTopic");
//     var option = select.options[select.selectedIndex];
//     if(option.value == "webDevelopment")
//     {
//         questions = [
//             new Questions("Which of the following is not the OOPS based Language?",["C++","Java","C","Python"],"C"),
//             new Questions("Which of the following is not a primitive data type?",["Boolean","Number","Array","Undefined"],"Array"),
//             new Questions("The correct sequence of HTML tags for starting a webpage is",["Head, Title, HTML, body","HTML, Body, Title, Head","Title, Head, HTML, Body","HTML, Head, Title, Body"],"HTML, Head, Title, Body"),
//             new Questions("Which of the following element is responsible for making the text bold in HTML?",["<pre>","<a>","<b>","<br>"],"<b>"),
//             new Questions("How to create a hyperlink in HTML?",['<a href = "www.javatpoint.com"> javaTpoint.com </a>','<a url = "www.javatpoint.com" javaTpoint.com /a>','<a link = "www.javatpoint.com"> javaTpoint.com </a>','<a> www.javatpoint.com <javaTpoint.com /a>'],'<a href = "www.javatpoint.com"> javaTpoint.com </a>'),
//             new Questions("How to insert an image in HTML?",['<img href = "jtp.png" />','<img url = "jtp.png" />','<img link = "jtp.png" />','<img src = "jtp.png" />'],'<img src = "jtp.png" />'),
//             new Questions("CSS stands for -",["Cascade style sheets","Color and style sheets","Cascading style sheets","None of the above"],"Cascading style sheets"),
//             new Questions("The CSS property used to control the element's font-size is -",["text-style","text-size","font-size","font-style"],"font-size"),
//             new Questions("In JavaScript, what is a block of statement?",["Conditional block","block that combines a number of statements into a single compound statement","both conditional block and a single statement","block that contains a single statement"],"block that combines a number of statements into a single compound statement"),
//             new Questions('The "function" and " var" are known as:',["Keywords","Data types","Declaration statements","Prototypes"],"Declaration statements"),
//             new Questions(" Which of the following type of a variable is volatile?",["Mutable variable","Dynamic variable","Volatile variable","Immutable variable"],"Mutable variable"),
//             new Questions("Which of the following function of the String object returns the character in the string starting at the specified position via the specified number of characters?",["slice()","split()","substr()","search()"],"substr()")
//         ]
//         console.log(questions);
//     }
//     else if(option.value == "cricket")
//     {
//         questions = [
//             new Questions("How many Players are there in a Cricket team ?",["10","11","9","5"],"11"),
//             new Questions("How Many formats are there in Cricket ?",["4","3","2","1"],"3"),
//             new Questions("Which of these countries does not play cricket test cricket ?",["Brazil","New Zealand","South Africa","Sri Lanka"],"Brazil"),
//             new Questions("Which teams is The Ashes series played between ?",["England vs Australia","India vs South Africa","Austrlia vs New Zealand","Bangladesh vs Afghanistan"],"England vs Australia"),
//             new Questions("What is the colour of the ball in 20 overs format ?",["Red","White","Blue","Brown"],"White"),
//             new Questions("How many Times has India won the world cup ?",["4","3","2","1"],"2"),
//             new Questions("Which of these Teams has never Won the World Cup ?",["England","Austalia","Sri Lanka","New Zealand"],"New Zealand"),
//             new Questions("Who holds the record for the highest individual score in an ODI?",["Chris Gayle","Rohit Sharma","Sachin Tendulkar","Herschelle Gibbs"],"Rohit Sharma"),
//             new Questions("In which part of the world would you find the Wankhede Stadium?",["India","Sri Lanka","Zimbabwe","South Africa"],"India"),
//             new Questions("What does DRS stand for?",["Decision Review System","Decision Review Scenario","Decision Review State","Decision Relief System"],"Decision Review System")
//         ]
//         console.log(questions);
//     }
//     display();
// }
class Quiz{
    constructor(questions)
    {
        this.questionIndex = 0;
        this.questions = questions;
        this.score = 0;
    }
}
Quiz.prototype.getData = function()
{
    return this.questions[this.questionIndex];
}

Quiz.prototype.checkAnswer = function(answer)
{
    console.log("answer",this.questions[this.questionIndex].answer) ;
    console.log("user answer",answer);
    return this.questions[this.questionIndex].answer === answer;
}

Quiz.prototype.incScore = function()
{
    this.score++;
    var scoreValue = document.getElementById("scoreValue");
    scoreValue.innerHTML = this.score;
}

Quiz.prototype.nextQuestion = function()
{
    this.questionIndex++;
    display();
}

Quiz.prototype.gameEnding = function()
{
    var currentQuestion = document.getElementById("currentQuestion");
    var totalQuestions = document.getElementById("totalQuestions");
    currentQuestion.innerHTML = this.questionIndex + 1;
    totalQuestions.innerHTML = this.questions.length;
    return this.questions.length == this.questionIndex;
}

Quiz.prototype.gameOver = function()
{
    document.getElementById("gameover").style.display = "grid";
    document.getElementById("container").style.opacity = "0.5";
    document.getElementById("userScore").innerHTML = this.score;
    document.getElementById("totalScore").innerHTML = this.questions.length;
    document.getElementById("nextbutton").setAttribute("disabled",true);

    document.getElementById("restart").onclick = function()
    {
        quizObj.score = 0;
        quizObj.questionIndex = 1;
        document.getElementById("gameover").style.display = "none";
        document.getElementById("container").style.opacity = "1";
        document.getElementById("scoreValue").innerText = "0";
        document.getElementById("nextbutton").removeAttribute("disabled");
        display();
        console.log("score = ",quizObj.score+"\nindex = ",quizObj.questionIndex)
        
    }
}
var quizObj = new Quiz(questions);