
var url = "http://localhost:3000/todoList/"
var todolist = 
{
    task : "",
    status : false,
}
var data = [];

function addTodo()
{
    todolist.task = document.querySelector("#todoCreate").value;
    var getInfo = new XMLHttpRequest();
    getInfo.open("POST",url);
    getInfo.setRequestHeader("content-type","application/json");
    getInfo.send(JSON.stringify(todolist));
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
    document.querySelector("#pendingbody").innerHTML = "";
    document.querySelector("#completedbody").innerHTML = "";
    data.forEach((user,i)=>
    {
        var tr = document.createElement("tr");
        for(a in user)
        {  
            if(a == "status")
            {
                if(user[a] == false)
                {
                var td = document.createElement("td");
                td.innerHTML = user.task;
                tr.appendChild(td);


                var completetd = document.createElement("td");
                var completebtn = document.createElement("button");
                completebtn.innerHTML = "Completed";
                completebtn.setAttribute("class","btn btn-primary");
                completebtn.setAttribute("onclick","taskComplete("+i+")");
                completetd.appendChild(completebtn);
                tr.appendChild(completetd);

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


                
                document.querySelector("#pendingbody").appendChild(tr);
                }
                else
                {
                var td = document.createElement("td");
                td.innerHTML = user.task;
                tr.appendChild(td);

                var incompletetd = document.createElement("td");
                var incompletebtn = document.createElement("button");
                incompletebtn.innerHTML = "Incomplete";
                incompletebtn.setAttribute("class","btn btn-primary");
                incompletebtn.setAttribute("onclick","taskInComplete("+i+")");
                incompletetd.appendChild(incompletebtn);
                tr.appendChild(incompletetd);

                // var edittd = document.createElement("td");
                // var editbtn = document.createElement("button");
                // editbtn.innerHTML = "Edit";
                // editbtn.setAttribute("class","btn btn-warning");
                // editbtn.setAttribute("onclick","editTask("+i+")");
                // edittd.appendChild(editbtn);
                // tr.appendChild(edittd);

                
                var deltd = document.createElement("td");
                var delbtn = document.createElement("button");
                delbtn.innerHTML = "Delete";
                delbtn.setAttribute("class","btn btn-danger");
                delbtn.setAttribute("onclick","delTask("+i+")");
                deltd.appendChild(delbtn);
                tr.appendChild(deltd);

                document.querySelector("#completedbody").appendChild(tr);
                }
            }

        }
        
    })
    if(document.getElementById("pendingbody").innerHTML == "" && document.getElementById("completedbody").innerHTML == "")
            {
                document.getElementById("pendinghead").style.display = "none";
                document.getElementById("completedhead").style.display = "none";
            }
            else
            {
                document.getElementById("pendinghead").style.display = "block";
                document.getElementById("completedhead").style.display = "block";
            }
}
function taskComplete(i)
{
    data[i].status = true;
    var completed_url = url+data[i].id;
    var getInfo = new XMLHttpRequest();
    getInfo.open("PUT",completed_url);
    getInfo.setRequestHeader("content-type","application/json");
    getInfo.send(JSON.stringify(data[i]));
    getInfo.onreadystatechange = function()
    {
        if(getInfo.status == 200 && getInfo.readyState == 4)
        {
            getData();
        }
    }
}
function taskInComplete(i)
{
    data[i].status = false;
    var completed_url = url+data[i].id;
    var getInfo = new XMLHttpRequest();
    getInfo.open("PUT",completed_url);
    getInfo.setRequestHeader("content-type","application/json");
    getInfo.send(JSON.stringify(data[i]));
    getInfo.onreadystatechange = function()
    {
        if(getInfo.status == 200 && getInfo.readyState == 4)
        {
            getData();
        }
    }
}
function validate()
{
    console.log("key pressed..");
    if(document.getElementById("todoCreate").value == "")
    {
        document.getElementById("updatebtn").setAttribute("disabled",true);
        document.getElementById("addbtn").setAttribute("disabled",true);
    }
    else{
        document.getElementById("updatebtn").removeAttribute("disabled");
        document.getElementById("addbtn").removeAttribute("disabled");
    }
}
function editTask(i)
{
    index = i;
    window.location.href="./edit.html";
    document.getElementById("addbtn").style.display = "none";
    document.getElementById("updatebtn").style.display = "block";
    document.getElementById("todoupdate").value = data[i].task;
}

function updateTodo()
{
    var update_url = url+data[index].id;
    data[index].task = document.getElementById("todoCreate").value;
    var getInfo = new XMLHttpRequest();
    getInfo.open("PUT",update_url);
    getInfo.setRequestHeader("content-type","application/json");
    getInfo.send(JSON.stringify(data[index]));
    getInfo.onreadystatechange = function(){
        if(getInfo.status == 200 && getInfo.readyState == 4)
        {
            getData();
        }
    }
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