

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
      "Which of the following cities was capital of Maharaja Ranjit Singh?",
      [" Amritsar ", "Patiala", "Lahore", "Kapurthala"],
      "Lahore" 
    ),
    new Question(
      " The Battle of Plassey was fought in",
      ["1757", "1782", "1764", "1748"],
      "1757"
    ),
    new Question(
      "Under Akbar, the Mir Bakshi was required to look after ",
      ["military affairs", "the state treasury", "the royal household", "the land revenue system"],
      "military affairs"
    ),
    new Question(
      "Study of inscription is called:",
      ["Archaeology", "Numismatic", "Epigraphy", "Palaeography"],
      "Epigraphy"
    ),
    new Question(
      "Which of the following metals was not known during the Indus Valley Civilization?",
      ["Iron", "Gold", "Copper", "Silver"],
      "Iron"
    ),
    new Question(
      "Who wrote Panchatantra?",
      ["Kalidas", "Vishnu Sharma ", " Chanakya", "Nagarjun"],
      "Vishnu Sharma "
    ),
    new Question(
      "Which of following Chalcolithic sites comes under Ganges system? ",
      [" Mohenjodaro", "  Ropar", "  Alamgirpur", "Hanumangarh "],
      "  Alamgirpur"
    ),
    new Question(
      "Satavahana dynasty originated from?",
      ["South of Satmola", "South of Satpura", "South of Vindhya", "South of Arawali"],
      "South of Vindhya"
    ),
    new Question(
      "Kalinga was situated between? ",
      [" Mahanadi & Godavari", "Krishna & Kaveri ", "Mahanadi & Krishna ", "Godavari & Krishna"],
      " Mahanadi & Godavari"
    ),
    new Question(
      "  What was the capital of Avanti?",
      [" Vallabhi", " Ujjain", "Satna", "Gaya"],
      " Ujjain"
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