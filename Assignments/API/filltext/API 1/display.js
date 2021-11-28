// users = JSON.parse(localStorage.getItem("username"));
user = {
    fname : "",
    lname : ""
}
function display(data)
{ 
    if(data !== undefined)
    {
        users = data;
    }
    document.getElementById("thead").style.display = "table-header-group"
    document.querySelector("tbody").innerHTML = "";
    users.forEach((user,i)=>{
        var tr = document.createElement("tr");
        var slno = document.createElement("td");
        slno.innerHTML = i+1;
        tr.appendChild(slno);
        for(a in user){
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
    clear();
}