function populate() {
    if (quizObject.isEnd()) {
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
    document.getElementById("progress").innerHTML = `Question ${
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
      "JavaScript is invented by",
      ["Brendan Eich", "Helsinki, Linus", "W3 Group", "James Gosling"],
      "Brendan Eich"
    ),
    new Question(
      "JavaScript was invented at _____ Lab.",
      ["Google Lab", "Netscape", "AT&T Bell LAb", "Sun Microsystem"],
      "Netscape"
    ),
    new Question(
      "JavaScript was originally developed under the name",
      ["Oak", "ActionScript", "Mocha", "Sencha"],
      "Mocha"
    ),
    new Question(
      "In March 1996, _____ was released, featuring support for JavaScript.",
      ["Internet Explorer 2.0", "Internet Explorer 1.0", "Netscape Navigator 2.0", "Netscape Navigator 1.0"],
      "Netscape Navigator 2.0"
    ),
    new Question(
      "Microsoft Developed a compatible dialect of JavaScript called",
      ["JScript", "MS JavaScript", "Advanced JavaScript", "MJavaScript"],
      "JScript"
    ),
    new Question(
      "Executable single line of Script is called as",
      ["Breakpoint in JS", "Line in JS", "Statement in JavaScript", "None of the above"],
      "Statement in JavaScript"
    ),
    new Question(
      "JavaScript Statements are executed by",
      ["JVM", "Compiler", "Server", "Browser"],
      "Browser"
    ),
    new Question(
      "Java Statement terminated by",
      ["Comma", "Full Stop", "Slash", "Semicolon"],
      "Semicolon"
    ),
    new Question(
      "JavaScript code contain sequence of",
      ["Executable Statements", "Method Calls", "HTML Tags", "All of the above"],
      "All of the above"
    ),
    new Question(
      "Which of the following statement is used to declare variable in JavaScript ?",
      ["Executable Statement", "Assignment Statement", "Declaration Statement", "Conditional Statement"],
      "Declaration Statement"
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