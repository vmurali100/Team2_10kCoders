function getData()
{
    document.getElementById("getData").style.display = "none";

    var getInfo = new XMLHttpRequest();
    getInfo.open("GET","https://jsonplaceholder.typicode.com/photos")
    getInfo.send();
    getInfo.onreadystatechange = function(){
        if(getInfo.status == 200 && getInfo.readyState == 4)
        {
            var data = JSON.parse(getInfo.response);
            display(data);    
        }
    }
}