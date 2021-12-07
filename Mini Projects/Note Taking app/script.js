
var url = "http://localhost:3000/notes/"
var notesobj = 
{
    notes : ""
}
var data = [];

function addNotes()
{
    notesobj.notes = document.querySelector("#notesCreate").value;
    var getInfo = new XMLHttpRequest();
    getInfo.open("POST",url);
    getInfo.setRequestHeader("content-type","application/json");
    getInfo.send(JSON.stringify(notesobj));
    getInfo.onreadystatechange = function(){
        if(getInfo.status == 200 && getInfo.readyState == 4)
        {
            getData();
        }
    }
}

function getData()
{
    var getInfo = new XMLHttpRequest();
    getInfo.open("GET",url);
    getInfo.send();
    getInfo.onreadystatechange = function()
    {
        if(getInfo.status == 200 && getInfo.readyState == 4)
        {
            data =JSON.parse(getInfo.response);
            console.log(data);
            display();
        }
    }
}

function display()
{
    document.querySelector("tbody").innerHTML = "";
    data.forEach((user,i)=>
    {
        
        var tr = document.createElement("tr");
        for(a in user)
        {  
           if(a == "notes")
           {
            var td = document.createElement("td");
            td.innerHTML = user.notes;
            tr.appendChild(td);

            var edittd = document.createElement("td");
            var editbtn = document.createElement("button");
            editbtn.innerHTML = "Edit";
            editbtn.setAttribute("class","btn btn-warning");
            editbtn.setAttribute("onclick","editTask("+i+")");
            edittd.appendChild(editbtn);
            tr.appendChild(edittd);

            
            var deltd = document.createElement("td");
            var delbtn = document.createElement("button");
            delbtn.innerHTML = "Delete";
            delbtn.setAttribute("class","btn btn-danger");
            delbtn.setAttribute("onclick","delTask("+i+")");
            deltd.appendChild(delbtn);
            tr.appendChild(deltd);
        }
        document.querySelector("tbody").appendChild(tr);
           }
        
    })
}

function editTask(i){
    window.location.href="./edit.html?"+i;
}

function delTask(i)
{
    var del_url = url+data[i].id;
    var getInfo = new XMLHttpRequest();
    getInfo.open("DELETE",del_url);
    getInfo.send();
    getInfo.onreadystatechange = function(){
        if(getInfo.status == 200 && getInfo.readyState == 4)
        {
            getData();
        }
    }
}



getData();