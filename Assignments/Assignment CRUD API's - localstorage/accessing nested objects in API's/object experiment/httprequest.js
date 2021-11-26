var data = JSON.parse(localStorage.getItem("nest"));
function getData()
{
    console.log("entered display()")
    document.getElementById("getData").style.display = "none";
    if(!data || data.length == 0)
    {
        var getInfo = new XMLHttpRequest();
        getInfo.open("GET","https://jsonplaceholder.typicode.com/users")
        getInfo.send();
        getInfo.onreadystatechange = function(){
            if(getInfo.status == 200 && getInfo.readyState == 4)
            {
                var data = JSON.parse(getInfo.response);
                localStorage.setItem("nest",JSON.stringify(data))
                display(data);   
            }
        }
    }  
    else
    {
        display(data);
    }
}


