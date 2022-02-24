users = data;
user = {
    id : "",
    email : "",
    username : "",
    password : ""
}
function display(data)
{ 
    users = data;
    document.getElementById("thead").style.display = "table-header-group"
    document.querySelector("tbody").innerHTML = "";
    users.forEach((user,i)=>{
        var tr = document.createElement("tr");
        for(a in user)
        {
            var td = document.createElement("td");
            td.innerHTML = user[a];
            tr.appendChild(td);
        }

        var edittd = document.createElement("td");
        var editbtn = document.createElement("button");
        editbtn.innerHTML = "Edit";
        editbtn.setAttribute("class","btn btn-warning");
        editbtn.setAttribute("onclick","edituser("+i+")");
        edittd.appendChild(editbtn);
        tr.appendChild(edittd);

        var deltd = document.createElement("td");
        var delbtn = document.createElement("button");
        delbtn.innerHTML = "Delete"
        delbtn.setAttribute("class","btn btn-danger");
        delbtn.setAttribute("onclick","deluser("+i+")");
        deltd.appendChild(delbtn);
        tr.appendChild(deltd);

        document.querySelector("tbody").appendChild(tr);
    })
}
