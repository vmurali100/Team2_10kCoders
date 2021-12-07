function updateTodo()
{
    var update_url = url+data[index].id;
    data[index].task = document.getElementById("todoupdate").value;
    var getInfo = new XMLHttpRequest();
    getInfo.open("PUT",update_url);
    getInfo.setRequestHeader("content-type","application/json");
    getInfo.send(JSON.stringify(data[index]));
    getInfo.onreadystatechange = function(){
        if(getInfo.status == 200 && getInfo.readyState == 4)
        {
            window.location.href = "index.html"
        }
    }
}