class Questions{
    constructor(text,choice,answer)
    {
        this.text =text;
        this.choice =choice;
        this.answer = answer;
    }
}
let questions = [
    new Questions("Which of the following is not the OOPS based Language?",["C++","Java","C","Python"],"C"),
    new Questions("Which of the following is not a primitive data type?",["Boolean","Number","Array","Undefined"],"Array"),
    new Questions("The correct sequence of HTML tags for starting a webpage is",["Head, Title, HTML, body","HTML, Body, Title, Head","Title, Head, HTML, Body","HTML, Head, Title, Body"],"HTML, Head, Title, Body"),
    new Questions("Which of the following element is responsible for making the text bold in HTML?",["<pre>","<a>","<b>","<br>"],"<b>"),
    new Questions("How to create a hyperlink in HTML?",['<a href = "www.javatpoint.com"> javaTpoint.com </a>','<a url = "www.javatpoint.com" javaTpoint.com /a>','<a link = "www.javatpoint.com"> javaTpoint.com </a>','<a> www.javatpoint.com <javaTpoint.com /a>'],'<a href = "www.javatpoint.com"> javaTpoint.com </a>'),
    new Questions("How to insert an image in HTML?",['<img href = "jtp.png" />','<img url = "jtp.png" />','<img link = "jtp.png" />','<img src = "jtp.png" />'],'<img src = "jtp.png" />'),
    new Questions("CSS stands for -",["Cascade style sheets","Color and style sheets","Cascading style sheets","None of the above"],"Cascading style sheets"),
    new Questions("The CSS property used to control the element's font-size is -",["text-style","text-size","font-size","font-style"],"font-size"),
    new Questions("In JavaScript, what is a block of statement?",["Conditional block","block that combines a number of statements into a single compound statement","both conditional block and a single statement","block that contains a single statement"],"block that combines a number of statements into a single compound statement"),
    new Questions('The "function" and " var" are known as:',["Keywords","Data types","Declaration statements","Prototypes"],"Declaration statements"),
    new Questions(" Which of the following type of a variable is volatile?",["Mutable variable","Dynamic variable","Volatile variable","Immutable variable"],"Mutable variable"),
    new Questions("Which of the following function of the String object returns the character in the string starting at the specified position via the specified number of characters?",["slice()","split()","substr()","search()"],"substr()")
]

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
    currentQuestion.innerHTML = this.questionIndex;
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
}
var quizObj = new Quiz(questions);