

class question {
  constructor(qtion, option, answer) {
    this.qtion = qtion;
    this.option = option;
    this.answer = answer;
  }
}

// question.prototype.correctAnswer = function (option) {
//     return option === this.answer;
//   };
class quiz {
  constructor(gkQuestions) {
    this.gkQuestions = gkQuestions;
    this.score = 0;
    this.questionIndex = 0;
  }
}

quiz.prototype.getQuestionIndex = function  () {
  return this.gkQuestions[this.questionIndex];
};
quiz.prototype.guess = function (answer) {
  if (quizObject.getQuestionIndex().answer == answer) {
    this.score++;
  }
  this.questionIndex++;
  populateQuestions();
};


quiz.prototype.isEnd = function () {
  return this.gkQuestions.length == this.questionIndex;
};



function restartQuiz() {
  document.getElementById("restart").style.display = "none";
  document.getElementById("questionArea").style.display = "block";
  document.getElementById("quizArea").style.display = "none";

  quizObject.questionIndex = 0;
  quizObject.score = 0;
  populateQuestions();
}

var gkQuestions = [
  new question(
    "In which year of First World War Germany declared war on Russia and France?",
    [1914, 1915, 1916, 1917],
    1914
  ),
  new question(
    "How many Lok Sabha seats belong to Rajasthan?",
    [32, 25, 30, 17],
    25
  ),
  new question(
    "India's first satellite is named after",
    ["Aryabhatt", "Bhaskara II", "Bhaskara I", "Albert Einstein"],
    "Aryabhatt"
  ),
  new question(
    "India's first atomic reactor was",
    ["Zerlina", "Dhruva", "Apsara", "Kamini"],
    "Apsara"
  ),
  new question(
    "India's first ocean wave's energy project was launched in",
    [1981, 1991, 1995, 2000],
    1991
  ),
  new question(
    "In which year of First World War Germany declared war on Russia and France?",
    [1914, 1915, 1916, 1917],
    1914
  ),
];

var quizObject = new quiz(gkQuestions);

function populateQuestions() {
  if (quizObject.isEnd()){
showScore()
  }else{
    console.log(quizObject.getQuestionIndex());
  let element = document.getElementById("question");
  element.innerHTML = quizObject.getQuestionIndex().qtion;

  let options = quizObject.getQuestionIndex().option;

  options.forEach((op, i) => {
    document.getElementById("option" + i).innerHTML = op;
    guessAnswer("option" + i, op);
  });
  showProgress() ;
  }
}
populateQuestions();

function guessAnswer(id, answer) {
  let element = document.getElementById(id);
  element.onclick = function () {
    quizObject.guess(answer) ;
    // populateQuestions()
  };
}
	function showScore() {
  document.getElementById("progress").innerHTML =
    "Scored " + quizObject.score + " . Out of " + quizObject.gkQuestions.length;
  document.getElementById("questionArea").style.display = "none";
  document.getElementById("quizArea").innerHTML =
    "Congrats .. You Are done with Quiz ..";
  document.getElementById("restart").style.display = "block";
}

function showProgress() {
  document.getElementById("progress").innerHTML = `Quesion ${
    quizObject.questionIndex + 1
  } of ${quizObject.gkQuestions.length}`;
}
