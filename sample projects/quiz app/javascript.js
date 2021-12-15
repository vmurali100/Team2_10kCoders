

class question {
    constructor(qtion, option, answer) {
      this.qtion = qtion;
      this.option = option;
      this.answer = answer;
    }
  }
  

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
         "Which type of JavaScript language is ___" ,[ "Object-Oriented","Object-Based","Assembly-language", "High-level"],"Object-Based"
    ),
    new question(
      "Which one of the following also known as Conditional Expression:",
      ["Alternative to if-else","Switch statement" ,"If-then-else statement" ,"immediate if"],"immediate if"
      
    ),
    new question(
      "The 'function' and 'var' are known as:?",
      ["Keywords","Data types","Declaration statements","Prototypes"],
      "Declaration statements" 
    ),
    new question(
      "Which one of the following is the correct way for calling the JavaScript code?",
      ["Preprocessor","Triggering Event","RMI","Function/Method"],"Function/Method"
      
    ),
    new question(
      "Which of the following type of a variable is volatile?",
      ["Mutable variable","Dynamic variable","Volatile variable", "Immutable variable"],"Mutable variable"
    ),
   
  ];
  
  var quizObject = new quiz(gkQuestions);
  
  function populateQuestions() {
    var index = 1;

    if (quizObject.isEnd()){
  showScore()
    }else{
      console.log(quizObject.getQuestionIndex());
    let element = document.getElementById("question");
   
  
    let options = quizObject.getQuestionIndex().option;
  
    options.forEach((op, i) => {
      document.getElementById("option" + i).innerHTML = op;
      element.innerHTML = index + quizObject.getQuestionIndex().qtion;
      index++
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
      
    };
  }
      function showScore() {
    document.getElementById("progress").innerHTML =
      "Scored " + quizObject.score + " . Out of " + quizObject.gkQuestions.length;
    document.getElementById("questionArea").style.display = "none";
    document.getElementById("quizArea").innerHTML =
      "Congrats .. You Are done with Quiz ..";
    document.getElementById("restart").style.display = "block";
    if(quizObject.score >= Number(3) ){
        document.getElementById("win").style.display = "block";
    }

  }

  
  function showProgress() {
    document.getElementById("progress").innerHTML = `Quesion ${
      quizObject.questionIndex + 1
    } of ${quizObject.gkQuestions.length}`;
  }
  