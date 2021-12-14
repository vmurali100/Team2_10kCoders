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
      " how many balls in an over ",
      ["6", "1", "2", "4"],
      "6"
    ),
    new Question(
      "ipl 2013 winner ",
      ["mumbai", "kkr", "Delhi", "srh"],
      "mumbai"
    ),
    new Question(
      " ipl 2014 winner ",
      ["mumbai", "kkr", "Delhi", "srh"],
      "4"
    ),
    new Question(
      "ipl 2015 winner  ",
      ["mumbai", "Delhi", "kkr", "chennai"],
      "mumbai"
    ),
    new Question(
      "ipl 2016 winner ? ",
      ["srh", "mum", "kkr", "Del"],
      "srh"
    ),
    new Question(
      "ipl 2017 winner ? ",
      ["mum", "kkr", "srh", "Del"],
      "mum"
    ),
    new Question(
      "Rcb Caption ",
      ["kohli", "Dhoni", "maxwel", "Abd"],
      "kohli"
    ),
    new Question(
      " ipl 2019 winner ",
      ["mum", "csk", "srh", "RR"],
      "csk"
    ),
    new Question(
      "ipl 2020 winner ",
      ["csk", "del", "rr", "srh"],
      "6"
    ),
    new Question(
      "ipl means  ",
      ["indian pre league", "in pol leg", "ind pol", "All"],
      "indian pre league"
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




