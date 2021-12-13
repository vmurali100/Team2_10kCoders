

function populate() {
    if (quizObject.isEnd()) {
      console.log("Congrats .. Ur Quiz is Completed");
      showScore();
    } else {
      var element = document.querySelector("#question");
      var questionObjet = quizObject.getQuesionObject(); 
      element.innerHTML = questionObjet.text;
  
   
  
      questionObjet.options.forEach((option, i) => {
        document.getElementById("choice" + i).innerHTML = option;
        addGussEvent("choice" + i, option);
      });
      showProgress();
    }
  }
  
  function showScore() {
    document.getElementById("progress").innerHTML =
      "Scored " + quizObject.score + " . Out of " + quizObject.questions.length;
    document.getElementById("questionArea").style.display = "none";
    document.getElementById("quizArea").innerHTML =
      "Congrats .. You Are done with Quiz ..";
    document.getElementById("restart").style.display = "block";
  }
  
  function showProgress() {
    document.getElementById("progress").innerHTML = `Quesion ${
      quizObject.questionIndex + 1
    } of ${quizObject.questions.length}`;
  }
  
  function addGussEvent(id, option) {
    document.getElementById(id).onclick = function () {
      quizObject.checkCorrectAnser(option);
    };
  }
  
  function restartQuiz() {
    document.getElementById("restart").style.display = "none";
    document.getElementById("questionArea").style.display = "block";
    document.getElementById("quizArea").style.display = "none";
  
    quizObject.questionIndex = 0;
    quizObject.score = 0;
    populate();
  }
  class Question {
    constructor(text, options, answer) {
      this.text = text;
      this.options = options;
      this.answer = answer;
    }
  }
  
  var questions = [
    new Question(
      "How do you write 'Hello World' in an alert box?",
      ["alert('Hello World');  ", "alertBox('Hello World');", "msg('Hello World');", "msgBox('Hello World');"],
      "alert('Hello World');"
    ),
    new Question(
      "How to write an IF statement in JavaScript? ",
      ["if (i == 5)", "if i = 5 then", "if i == 5 then", "if i = 5"],
      "if (i == 5)"
    ),
    new Question(
      "Which event occurs when the user clicks on an HTML element? ",
      ["onchange", "onmouseover", "onclick", "onmouseclick"],
      "onclick"
    ),
    new Question(
      "How do you declare a JavaScript variable? ",
      ["var carName;", "variable carName;++", "v carName;", "vari carName"],
      "var carName;"
    ),
    new Question(
      "JavaScript is a ___ -side programming language? ",
      ["Client", "server", "Both", "None"],
      "Both"
    ),
    new Question(
      "How do you find the minimum of x and y using JavaScript? ",
      ["min(x,y);", "Math.min(x,y)", " Math.min(xy)", " min(xy);"],
      "Math.min(x,y)"
    ),
    new Question(
      "Which are the correct “if” statements to execute certain code if “x” is equal to 2? ",
      [" if(x != 2 )", "if(x == 2)", " if(x = 2)", " if(x 2)"],
      "if(x == 2)"
    ),
    new Question(
      "What will the code return?  Boolean(3 < 7)? ",
      ["True", "False", "Nan", "Syntax Error"],
      "True"
    ),
    new Question(
      "What is the correct syntax for adding comments in JavaScript? ",
      ["comment", "//This is a comment", "–This is a comment ", "**This is a comment**"],
      "//This is a comment"
    ),
    new Question(
      "Which of the following is not the JavaScriopt operator? ",
      ["type of", "this", "delete", "new"],
      "this"
    ),
  ];
  
  class Quiz {
    constructor(questions) {
      this.score = 0;
      this.questions = questions;
      this.questionIndex = 0;
    }
  }
  
  Quiz.prototype.getQuesionObject = function () {
    return this.questions[this.questionIndex];
  };
  Quiz.prototype.checkCorrectAnser = function (answer) {
    if (quizObject.getQuesionObject().answer == answer) {
      this.score++;
    }
    this.questionIndex++;
    populate();
  };
  
  Quiz.prototype.isEnd = function () {
    return this.questions.length == this.questionIndex;
  };
  var quizObject = new Quiz(questions);
  
  populate();