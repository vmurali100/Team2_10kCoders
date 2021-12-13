

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
      "What was the first movie of megastar Chiranjeevi?",
      ["Mana oori pandavulu  ", "Donga", "Yamakinkarudu", "Punaadi raalu"],
      "Punaadi raalu"
    ),
    new Question(
      "Who is the hero that played Venkatesh's brother role in the movie Sankranthi? ",
      ["Ravi Teja", "Srikanth", "Ram", "Tarun"],
      "Srikanth"
    ),
    new Question(
      "Who is the director of the movie Jalsa?",
      ["Bhaskar", "V.V. Vinayak", "Trivikram", "Srinu Vaitla"],
      "Trivikram"
    ),
    new Question(
      "How many characters did  Nagarjuna perform in his latest flick, KING ",
      ["3", "2", "1", "4"],
      "3"
    ),
    new Question(
      "What is Brahmanandam's character name in the movie Ready?",
      ["Mc Dowell Murthy", "Ms Donald Murthy", "MC Donal Murthy", "MC Donald Murthy"],
      "MC Donald Murthy"
    ),
    new Question(
      "Who is the singer sang the song 'Pillagali Allari' in the movie ATHADU?",
      ["Sunitha", "Usha", "Kousalya", "Shreya Ghoshal"],
      "Shreya Ghoshal"
    ),
    new Question(
      "Among which of the hero's Trisha did not act with? ",
      ["Chiranjeevi", " Venkatesh", "Ram", "None of the above"],
      "Ram"
    ),
    new Question(
      "Ram Charan First Movie? ",
      ["Chirutha", "Orange", "Maghadheera", "Bruce lee"],
      "Chirutha"
    ),
    new Question(
      "Rajamouli Latest Movie?",
      ["Maryadha Ramanna", "RRR ", "Pushpa",'Liger'],
      "RRR"
    ),
    new Question(
      "Nani Latest Movie Heroine? ",
      ["Rashmika", "Thapsee", "Sai Pallavi", "Kajal"],
      "Sai Pallavi"
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