function populate() {
    if (quizObject.isEnd()) {
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
    document.getElementById("progress").innerHTML = `Question ${
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
      "CSS1 Developed in _____ by the W3C, describes CSS language and simple visual formatting for all HTML tags.",
      ["1996", "1994", "1992", "1995"],
      "1996"
    ),
    new Question(
      "From which version of CSS under development since the late 1990s, added a lot of extra features ?",
      ["CSS1", "CSS2", "CSS3", "None of the above"],
      "CSS3"
    ),
    new Question(
      "How many types of levels in style sheets ?",
      ["two level", "One level", "four level", "three level"],
      "three level"
    ),
    new Question(
      "An external style sheet is ideal when the style is applied to",
      ["many pages", "few pages", "single pages", "None of the above"],
      "many pages"
    ),
    new Question(
      "Which of the style sheet is also known as Embedded Style Sheet ?",
      ["Inline Style Sheet", "External Style Sheet", "Document Style Sheet:", "None of the above"],
      "Document Style Sheet:"
    ),
    new Question(
      "Which of the following is the superior styles of html ?",
      ["frame", "frames", " iframe", "css"],
      "css"
    ),
    new Question(
      "The Disadvantages of Cascading Style Sheets is",
      ["Browsers Compatibility", "Low Performance", "High Performance", "All of the above"],
      "Browsers Compatibility"
    ),
    new Question(
      "A _____ tag is used to specify that the browser is to fetch and use an external style sheet file",
      ["src", "sheet", "link", "None of the above"],
      "link"
    ),
    new Question(
      "To use inline styles you use the style attribute in the _____ tag",
      ["link tag", "style tag", "relevant tag", "None of the above"],
      "relevant tag"
    ),
    new Question(
      "CSS provided the basic styles such as",
      ["setting margins", "specifying font and font styles", "applying colors", "All of the above"],
      "All of the above"
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