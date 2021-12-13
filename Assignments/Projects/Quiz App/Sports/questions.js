

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
      "Who was the first Indian to win the World Amateur Billiards title?",
      ["Manoj Kothari ", "Michael Ferreira", "Wilson Jones", "Geet Sethi"],
      "Wilson Jones"
    ),
    new Question(
      "Who is the first Indian woman to win an Asian Games gold in 400m run?",
      ["	K.Malleshwari", "Kamaljit Sandhu", "P.T.Usha", "M.L.Valsamma"],
      "Kamaljit Sandhu"
    ),
    new Question(
      "When was Amateur Athletics Federation of India established? ",
      ["1936", "1946", "1956", "1966"],
      "1946"
    ),
    new Question(
      "India won its first Olympic hockey gold in...?",
      ["1928", "1932", "1936", "1948"],
      "1928"
    ),
    new Question(
      "Who among the following is known as Flying Sikh of India",
      ["Milkha Singh", "Joginder Singh", "PT Usha", " Kapil Dev"],
      "Milkha Singh"
    ),
    new Question(
      " In which stadium Tendulkar completed his 100th Century",
      [" Eden Garden", " Shere Bangla Stadium ", " Firoz Shah Kotla Ground", "None of the above"],
      " Shere Bangla Stadium "
    ),
    new Question(
      " Total Olympic medal won by India in 2012 ",
      [" 5", " 4", " 6", " 8"],
      " 6"
    ),
    new Question(
      "Who was india's first football captain?",
      ["P K Banerjee", " Shailen Manna", "SC Goswami", "Talimeren Ao"],
      "Talimeren Ao"
    ),
    new Question(
      "First non test playing nation that beat India in International Cricket",
      [" Sri Lanka", "  Bangladesh", "  Zimbabwe", "New zealand"],
      " Sri Lanka"
    ),
    new Question(
      "Who is the first recipient of Rajiv Gandhi Khel Ratna Award? ",
      ["Sunil Gavaskar", "Sachin Tendular", " Milkha Singh", "Viswanathan Anand"],
      "Viswanathan Anand"
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