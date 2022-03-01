class Questions{
    constructor(text,choice,answer)
    {
        this.text =text;
        this.choice =choice;
        this.answer = answer;
    }
}
var quizObj;
var questions;

function topic()
{
    var select = document.getElementById("selectedTopic");
    var option = select.options[select.selectedIndex];
    switch(option.value)
    {
        case "webDevelopment":
            questions = [
                new Questions("Which of the following is not the OOPS based Language?",["C++","Java","C","Python"],"C"),
                new Questions("Which of the following is not a primitive data type?",["Boolean","Number","Array","Undefined"],"Array"),
                new Questions("The correct sequence of HTML tags for starting a webpage is",["Head, Title, HTML, body","HTML, Body, Title, Head","Title, Head, HTML, Body","HTML, Head, Title, Body"],"HTML, Head, Title, Body"),
                new Questions("Which of the following element is responsible for making the text bold in HTML?",["<pre>","<a>","<b>","<br>"],"<b>"),
                new Questions("How to create a hyperlink in HTML?",['<a href = "www.javatpoint.com"> javaTpoint.com </a>','<a url = "www.javatpoint.com" javaTpoint.com /a>','<a link = "www.javatpoint.com"> javaTpoint.com </a>','<a> www.javatpoint.com <javaTpoint.com /a>'],'<a href = "www.javatpoint.com"> javaTpoint.com </a>'),
                new Questions("How to insert an image in HTML?",['<img href = "jtp.png" />','<img url = "jtp.png" />','<img link = "jtp.png" />','<img src = "jtp.png" />'],'<img src = "jtp.png" />'),
                new Questions("CSS stands for -",["Cascade style sheets","Color and style sheets","Cascading style sheets","None of the above"],"Cascading style sheets"),
                new Questions("The CSS property used to control the element's font-size is -",["text-style","text-size","font-size","font-style"],"font-size"),
                new Questions("In JavaScript, what is a block of statement?",["Conditional block","block that combines a number of statements into a single compound statement","both conditional block and a single statement","block that contains a single statement"],"block that combines a number of statements into a single compound statement"),
                new Questions('The "function" and " var" are known as:',["Keywords","Data types","Declaration statements","Prototypes"],"Declaration statements"),
                new Questions(" Which of the following type of a variable is volatile?",["Mutable variable","Dynamic variable","Volatile variable","Immutable variable"],"Mutable variable"),
                new Questions("Which of the following function of the String object returns the character in the string starting at the specified position via the specified number of characters?",["slice()","split()","substr()","search()"],"substr()")
            ];
            break;
        case "cricket":
            questions = [
                new Questions("How many Players are there in a Cricket team ?",["10","11","9","5"],"11"),
                new Questions("How Many formats are there in Cricket ?",["4","3","2","1"],"3"),
                new Questions("Which of these countries does not play cricket test cricket ?",["Brazil","New Zealand","South Africa","Sri Lanka"],"Brazil"),
                new Questions("Which teams is The Ashes series played between ?",["England vs Australia","India vs South Africa","Austrlia vs New Zealand","Bangladesh vs Afghanistan"],"England vs Australia"),
                new Questions("What is the colour of the ball in 20 overs format ?",["Red","White","Blue","Brown"],"White"),
                new Questions("How many Times has India won the world cup ?",["4","3","2","1"],"2"),
                new Questions("Which of these Teams has never Won the World Cup ?",["England","Austalia","Sri Lanka","New Zealand"],"New Zealand"),
                new Questions("Who holds the record for the highest individual score in an ODI?",["Chris Gayle","Rohit Sharma","Sachin Tendulkar","Herschelle Gibbs"],"Rohit Sharma"),
                new Questions("In which part of the world would you find the Wankhede Stadium?",["India","Sri Lanka","Zimbabwe","South Africa"],"India"),
                new Questions("What does DRS stand for?",["Decision Review System","Decision Review Scenario","Decision Review State","Decision Relief System"],"Decision Review System")
            ];
            break;
        case "GK":
            questions =  [
                    new Questions("In 1768, Captain James Cook set out to explore which ocean?",["Pacific Ocean","Atlantic Ocean","Indian Ocean","Arctic Ocean"],"Pacific Ocean"),
                    new Questions("What is actually electricity?",["A flow of water","A flow of air","A flow of electrons","A flow of atoms"],"A flow of electrons"),
                    new Questions("Which of the following is not an international organisation?",["FIFA","NATO","ASEAN","FBI"],"FBI"),
                    new Questions("Which of the following disorders is the fear of being alone?",["Agoraphobia","Aerophobia","Acrophobia","Arachnophobia"],"Agoraphobia"),
                    new Questions("Which of the following is a song by the German heavy metal band “Scorpions”?",["Stairway to Heaven","Wind of Change","Don’t Stop Me Now","Hey Jude"],"Wind of Change"),
                    new Questions("What is the speed of sound?",["120 km/h","1,200 km/h","400 km/h","700 km/h"],"1,200 km/h"),
                    new Questions("Which is the easiest way to tell the age of many trees?",["To measure the width of the tree","To count the rings on the trunk","To count the number of leaves","To measure the height of the tree"],"To count the rings on the trunk"),
                    new Questions("What do we call a newly hatched butterfly?",["A moth","A butter","A caterpillar","A chrysalis"],"A caterpillar"),
                    new Questions("In total, how many novels were written by the Bronte sisters?",["4","5","6","7"],"7"),
                    new Questions("What was the first country to use tanks in combat during World War I?",["France","Japan","Britain","Germany"],"Britain")
                ];
                break;
        case "indianFood":
            questions = [
                new Questions("What oil is largely used in the cooking of South India?",["Sunflower Oil","Groundnut Oil","Coconut Oil","Cottonseed Oil"],"Coconut Oil"),
                new Questions("Which of these mithai is claimed to have been accidentally prepared by Mughal emperor Shah Jahan’s personal chef?",["Halwa","Kheer","Laddoo","Gulab Jamun"],"Gulab Jamun"),
                new Questions("Which of the following street-foods is largely found on most streets across India?",["Pani Puri","Dahi Bhalle","Dal Makhani","Chicken Tikka Masala"],"Pani Puri"),
                new Questions("Which of these was considered as the ‘food of gods’ in ancient India?",["Fruits","Milk","Yoghurt","Ghee"],"Yoghurt"),
                new Questions("Which city is famous for its Pav Bhaji & Vada Pav?",["Bengaluru","Kolkata","Ahmedabad","Mumbai"],"Mumbai"),
                new Questions("Choose the correct dish that belongs to the Udupi cuisine.",["Idli","Dosa","Rasam","All of the above"],"All of the above"),
                new Questions("Which city in India is famous for its Biryani?",["Goa","Hyderabad","Delhi","Amritsar"],"Hyderabad"),
                new Questions("Basundi – Which state is the origin of this sweet dish?",["Rajasthan","Karnataka","Gujarat","Maharashtra"],"Gujarat"),
                new Questions("Rogan Josh is the signature dish of which cuisine?",["Kashmiri","Goan","Mughlai","Awadhi"],"Kashmiri"),
                new Questions("In Gujarat, which of the following combination is eaten largely during the festival of Dussehra?",["Khichdi-Kadhi","Fafda-Jalebi","Khaman-Dhokla","Rabdi-Jalebi"],"Fafda-Jalebi")
            ];
            break;
        case "olympics":
            questions = [
                new Questions("When were held the first winter Olympics?",["1922","1924","1932","1902"],"1924"),
                new Questions("Which of the following is NOT a part of the summer Olympics?",["Boxing","Cycling","Biathlon","Water Polo"],"Biathlon"),
                new Questions("Which of the following is not a part of the modern Olympics anymore?",["Softball","Volleyball","Taekwondo","Table Tennis"],"Softball"),
                new Questions("To whom Greeks dedicated Olympic Games?",["Apollo","Hera","Demeter","Zeus"],"Zeus"),
                new Questions("How is called a period between Olympic Games?",["Fermata","Holiday Break ","Olympiad","Break"],"Olympiad"),
                new Questions("From what country originated Olympics?",["USA","Italy","Greece","France"],"Greece"),
                new Questions("Which country won the most gold medals in at the 1996 Summer Olympics?",["USA","Belgium","Great Britain","Finland"],"USA"),
                new Questions("Who is the first black person to win individual swimming gold?",["Nelson Mandela","Anthony Nesty","Jesse Jackson","Muhammad Ali"],"Anthony Nesty"),
                new Questions("Who was the first Indian woman to ever win an Olympic medal ?",["Geeta Phogat","Sakshi","PV Sindhu","Karnam Malleswari"],"Karnam Malleswari"),
                new Questions("Who is the first Indian to win an individual gold medal at Olympics?",["Sushil Kumar","Vijender Singh","Abhinav Bindra","Dhyan Chand"],"Abhinav Bindra")
            ];
            break;
    }
    
    document.querySelector("#topic").style.display = "none";
    document.querySelector("main").style.display = "grid";
    document.querySelector("#topicArea").style.display = "block";
    document.querySelector("#topicArea").innerHTML = "Topic: "+option.text;
    quizObj = new Quiz(questions);
    display();
}
class Quiz{
    constructor(questions)
    {
        this.questionIndex = 0;
        this.questions = questions;
        this.score = 0;
    }
}
Quiz.prototype.getData = function()
{
    return this.questions[this.questionIndex];
}

Quiz.prototype.checkAnswer = function(answer)
{
    console.log("answer",this.questions[this.questionIndex].answer) ;
    console.log("user answer",answer);
    return this.questions[this.questionIndex].answer === answer;
}

Quiz.prototype.incScore = function()
{
    this.score++;
    var scoreValue = document.getElementById("scoreValue");
    scoreValue.innerHTML = this.score;
}

Quiz.prototype.nextQuestion = function()
{
    this.questionIndex++;
    display();
}

Quiz.prototype.gameEnding = function()
{
    var currentQuestion = document.getElementById("currentQuestion");
    var totalQuestions = document.getElementById("totalQuestions");
    currentQuestion.innerHTML = this.questionIndex + 1;
    totalQuestions.innerHTML = this.questions.length;
    return this.questions.length == this.questionIndex;
}

Quiz.prototype.gameOver = function()
{
    document.getElementById("gameover").style.display = "grid";
    document.getElementById("container").style.opacity = "0.5";
    document.getElementById("userScore").innerHTML = this.score;
    document.getElementById("totalScore").innerHTML = this.questions.length;
    document.getElementById("nextbutton").setAttribute("disabled",true);
    document.querySelector("#topicArea").style.display = "none";

    document.getElementById("restart").onclick = function()
    {
        quizObj.score = 0;
        quizObj.questionIndex = 0;
        document.getElementById("gameover").style.display = "none";
        document.getElementById("container").style.opacity = "1";
        document.getElementById("scoreValue").innerText = "0";
        document.getElementById("nextbutton").removeAttribute("disabled");
        display();
        console.log("score = ",quizObj.score+"\nindex = ",quizObj.questionIndex)
        
    }
    document.getElementById("changeTopic").onclick = function()
    {
        document.querySelector("#topic").style.display = "grid";
        document.querySelector("main").style.display = "none";
        quizObj.score = 0;
        quizObj.questionIndex = 0;
        document.getElementById("gameover").style.display = "none";
        document.getElementById("container").style.opacity = "1";
        document.getElementById("scoreValue").innerText = "0";
        document.getElementById("nextbutton").removeAttribute("disabled");
        display();
        
    }
}
