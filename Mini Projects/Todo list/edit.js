var data = [];
var link = "http://localhost:3000/todoList/";
var current_url = window.location.href;
var index = current_url.substr(current_url.indexOf("?")+1);
console.log(index);
    
var getdata = new XMLHttpRequest();
getdata.open("GET",link);
getdata.send(null);
getdata.onreadystatechange = function()
{
    if(getdata.status == 200 && getdata.readyState == 4)
    {
        data =JSON.parse(getdata.response);
        document.getElementById("todoupdate").value = data[index].task;
    }
}


function cancelTodo(){
    window.location.href =  'index.html';


}