var data = [];
var url = "http://localhost:3000/notes/";
var current_url = window.location.href;
var index = current_url.substr(current_url.indexOf("?")+1);
console.log(index);
    
var getdata = new XMLHttpRequest();
getdata.open("GET",url);
getdata.send(null);
getdata.onreadystatechange = function()
{
    if(getdata.status == 200 && getdata.readyState == 4)
    {
        data =JSON.parse(getdata.response);
        document.getElementById("notesUpdate").value = data[index].notes;
    }
}


function cancel(){
    window.location.href =  'index.html';


}