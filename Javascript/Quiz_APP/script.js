// 1. Questions With Options and Correct Answer
// 2  A function to Call when user Selcts an Answer
// 3. A function to Check the Correct Answer

// Creating a Class to Create a Single Question

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
    "Which is not An Object Oriented Programming Language ? ",
    ["C", "C++", "Java", "C"],
    "C"
  ),
  new Question(
    "Which Language is Used for styling the webpages ? ",
    ["HTML", "CSS", "Java", "Jquery"],
    "CSS"
  ),
  new Question(
    "THere are _ main components in OOP Language ? ",
    ["1", "2", "3", "4"],
    "4"
  ),
  new Question(
    "Which Language is used for Web apps ? ",
    ["PHP", "PYthon++", "Java", "All"],
    "All"
  ),
  new Question(
    "Which is MVC ? ",
    ["Language", "Library", "Framework", "All"],
    "Framework"
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
