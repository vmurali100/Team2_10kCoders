function display()
{
    if(quizObj.gameEnding())
    {
        quizObj.gameOver();
    }
    else
    {
        var clicked = false;
        var quizData = quizObj.getData();
        var questionArea = document.getElementById("questionArea");
        
        questionArea.innerHTML = quizData.text;
        quizData.choice.forEach((option,i) =>
        {
            var optionArea = document.getElementById("choice"+i);
            optionArea.innerText = option;
            optionArea.removeAttribute("disabled");
            optionArea.style = "background-color: #90ADC6;"
            optionArea.onmouseover = function()
            {
                optionArea.style = "background-color:#74BDCB;"
            }
            optionArea.onmouseout = function()
            {
                optionArea.style = "background-color:#90ADC6;"
            }
            checkOnClick("choice"+i,option,optionArea)
        });
        
        function checkOnClick(id,option,optionArea)
        {
            optionArea.onclick = function()
            {
                clicked = true;
                console.log("id:",id+" option: ",option);
                if(quizObj.checkAnswer(option))
                {
                    optionArea.style = "background-color:green"
                    quizObj.incScore();
                }
                else
                {
                    optionArea.style = "background-color:red"
                }
                for(var i=0;i<4;i++)
                {
                    document.getElementById("choice"+i).setAttribute("disabled",true);
                }
            }
        }

        document.getElementById("nextbutton").onclick = function()
        {
            if(clicked)
            {
                quizObj.nextQuestion();
            }
            
        }
    }
}
display()