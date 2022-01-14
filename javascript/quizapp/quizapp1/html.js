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
    "Which of the following is used to create Web Pages ?",
    ["C++", "Java", "HTML", "JVM"],
    "HTML"
  ),
  new Question(
      "HTML is a set of markup _________.",
      ["tags", "sets", "attributes", "none of the above"],
      "tags"
    ),
    new Question(
      "HTML tags are used to describe document _______.",
      ["definition", "content", "language", "model"],
      "content"
    ),
    new Question(
      "HTML program is saved using ______ extension.",
      ["htmn", "html", "htnl", "htnn"],
      "html"
    ),
    new Question(
      "HTML program can be read and rendered by _______.",
      ["Compiler", "Server", "Web Browser", "Interpreter"],
      "Web Browser"
    ),
    new Question(
      "HTML tags are surrounded by _____ brackets.",
      ["Angle", "Curly", "Round", "Square"],
      "Angle"
    ),
    new Question(
      "HTML document can contain _______.",
      ["Tags", "Plain Text", "Attributes", "All the above"],
      "All the above"
    ),
    new Question(
      "Page designed in HTML is called as _________.",
      ["Server Page", "Web page", "Media Page", "none of the above"],
      "Web page"
    ),
    new Question(
      "Which of the following is the first web browser ?",
      ["Nexus", " Netscape Navigator", "Internet Explorer", "Mosaic"],
      "Nexus"
    ),
    new Question(
      "Who created the first web browser ?",
      ["Tim Berners Lee", "Jacobs", "Marc Andeersen", "Mozilla foundation"],
      "Tim Berners Lee"
    ),
    new Question(
      "We can write HTML code using ________.",
      ["Microsoft Word", "Notepad", "Notepad++", "All the above"],
      "All the above"
    ),
    new Question(
      "Fundamental blocks in HTML is called as ________.",
      ["HTML Attribute", "HTML Tag", "HTML Body", "HTML Element"],
      "HTML Tag"
    ),
    new Question(
      "HTML is considered as __________.",
      ["High Level Language", "OOP Language", "Programming Language", "Markup Language"],
      "Markup Language"
    ),
    new Question(
      " _______ attribute is used to specify where to open the linked document.",
      ["target", "coords", "rel", "none of the above"],
      "target"
    ),
    new Question(
      "Which of the anchor attribute is used to specify the language of the linked document ?",
      ["alang", "lang", "hreflang", "all the above"],
      "hreflang"
    ),
    new Question(
      "Relationship between the current document and the linked document is specified using the _____ attribute.",
      ["relation", "rel", "href", "target"],
      "rel"
    ),
    new Question(
      "HTML links can be styled using ______.",
      ["XML", "CSS", "JavaScript", "PHP"],
      "CSS"
    ),
    new Question(
      "Which is smallest Heading Tag in HTML ? ",
      ["H1", "H3", "H6", "H4"],
      "H6"
    ),
    new Question(
      "_____ automatically add some empty spaces before and after each heading.",
      ["Compiler", "Server", "Browser", "Interpreter"],
      "Browser"
    ),
    new Question(
      " Which of the following tag is used to divide the HTML document into the paragraphs ?",
      ["p", "paragraph", "par", "pg"],
      "p"
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