var data = JSON.parse(localStorage.getItem("data5"));
function getData()
{
    document.getElementById("getData").style.display = "none";
    if(!data || data.length == 0)
    {
        var getInfo = new XMLHttpRequest();
        getInfo.open("GET","https://jsonplaceholder.typicode.com/comments")
        getInfo.send();
        getInfo.onreadystatechange = function(){
            if(getInfo.status == 200 && getInfo.readyState == 4)
            {
                var data = JSON.parse(getInfo.response);
                localStorage.setItem("data5",JSON.stringify(data))
                display(data);   
            }
        }
    }  
    else
    {
        display(data);
    }
}


