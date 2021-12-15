

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
         "121 Divided by 11 is  __" ,[ 11,10,19 ,18],11
    ),
    new question(
      "60 Times of 8 Equals to",
      [480, 500, 250, 400],480
      
    ),
    new question(
      " Find the Missing Term in Multiples of 6 : 6, 12, 18, 24, _, 36, 42, _ 54, 60.",
      [32-45,30-48 ,24-40,25-49],
      30-48 
    ),
    new question(
      "What is the Next Prime Number after 7 ?",
      [13,12,14,11],
      11
    ),
    new question(
      "The Product of 131 × 0 × 300 × 4",
      [22, 0, 131, 300],
      0
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
  