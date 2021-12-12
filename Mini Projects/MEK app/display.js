function display()
{
    if(quizObj.gameEnding())
    {
        quizObj.gameOver();
    }
    else
    {
        var quizData = quizObj.getData();
        var questionArea = document.getElementById("questionArea");
        
        questionArea.innerHTML = quizData.text;
        quizData.choice.forEach((option,i) =>
        {
            var optionArea = document.getElementById("choice"+i);
            optionArea.innerText = option;
            checkOnClick("choice"+i,option,optionArea)
        });
        
        function checkOnClick(id,option,optionArea)
        {
            optionArea.onclick = function()
            {
                console.log("id:",id+" option: ",option);
                if(quizObj.checkAnswer(option))
                {
                    quizObj.score();
                }
            }
        }
    }
}
display();