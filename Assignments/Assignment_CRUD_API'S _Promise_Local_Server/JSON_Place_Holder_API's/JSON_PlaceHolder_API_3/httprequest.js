var data = [];
var api_url = "http://localhost:3000/albums/"
function getData()
{
    document.getElementById("getData").style.display = "none";
    var getInfo = new XMLHttpRequest();
    getInfo.open("GET",api_url)
    getInfo.send();
    getInfo.onreadystatechange = function(){
        if(getInfo.status == 200 && getInfo.readyState == 4)
        {
            var data = JSON.parse(getInfo.response);
            localStorage.setItem("data6",JSON.stringify(data))
            display(data);   
        }
    }
}


