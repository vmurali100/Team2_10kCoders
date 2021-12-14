function populate() {
    if (quizObject.isEnd()) {
      console.log("Congrats .. Ur Quiz is Completed");
      showScore();
    } else {
      var element = document.querySelector("#question");
      var questionObjet = quizObject.getQuesionObject(); // will give Current Question Object
      element.innerHTML = questionObjet.text;
  
      // Display Choices
  
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
    document.getElementById("progress").innerHTML = `Quesion ${quizObject.questionIndex + 1
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
      " Pushpa Release Date ",
      ["Dec17", "Dec24", "Jan13", "Jan14"],
      "Dec17"
    ),
    new Question(
      "Nani new movie release Date"
      ["Dec17", "Dec24", "Jan13", "Jan14"],
      "Dec24"
    ),
    new Question(
      " pk full form ",
      [ "pawankalyan","praveenkhan","parkalyan","powerkalan"],
      "pawankalyan"
    ),
    new Question(
      " ",
      ["mumbai", "Delhi", "kkr", "chennai"],
      "mumbai"
    ),
    new Question(
      "bahubali hero ? ",
      ["prabhas", "rajini", "chiru", "suriya"],
      "prabhas"
    ),
    new Question(
      "mb hero name ? ",
      ["mahesh", "pavan", "sampu", "allu"],
      "mahesh"
    ),
    new Question(
      "chiru D.O.B ",
      ["A22", "A23", "A24", "A25"],
      "A22"
    ),
    new Question(
      " mahesh latest movie",
      ["svp", "sap", "sup", "swa"],
      "svp"
    ),
    new Question(
      "RRR release ",
      ["Jan7", "j8", "j9", "j10"],
      "Jan7"
    ),
    new Question(
      "AHA Ott Owner  ",
      ["AA", "pk", "sk", "All"],
      "AA"
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




