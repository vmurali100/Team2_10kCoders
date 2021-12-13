

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
      "	--------- is the father of computer.?",
      [" Herman Hollerith ", "Ada Byron", "Blaise Pascal", "Charles Babbage"],
      "Charles Babbage"
    ),
    new Question(
      "A desktop computer is also known as ",
      ["PC", "Laptop", "Main frame", "Palm top"],
      "PC"
    ),
    new Question(
      "CPU is the --------- of computer.? ",
      ["Brain", "Ear", "Eye", "All"],
      "Brain"
    ),
    new Question(
      "	----------- is the physical device of a computer system? ",
      ["Program", "Software", "Hardware", "Application"],
      "Hardware"
    ),
    new Question(
      "	IC stands for? ",
      [" Internal Circuit", "Internal Computer", "Integrated Computer", "Integrated Circuit"],
      "Integrated Circuit"
    ),
    new Question(
      "	Which of the following is not a characteristic of a computer? ",
      ["Speed", "Intelligence", "Automation", "Versatility"],
      "Intelligence"
    ),
    new Question(
      "	Computer is a/an ----------",
      ["battery", "input device", "monitoring device", "Electronic device"],
      "Electronic device"
    ),
    new Question(
      "	The first computer was programmed using..? ",
      ["Assembly language", "Machine Language", "Source Code", "Object Code"],
      "Machine Language"
    ),
    new Question(
      "	The main characteristic of fourth generation was ",
      ["Transistor", "Vaccum Tubes", "Integrated circuit ", "VLSI"],
      "VLSI"
    ),
    new Question(
      "The CPU and Primary memory are located on the ",
      [" output device", "storage device", "motherboard", " expansion board"],
      "motherboard"
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