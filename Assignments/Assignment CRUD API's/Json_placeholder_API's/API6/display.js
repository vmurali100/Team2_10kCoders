user = {
    name : "",
    username : "",
    email : "",
    address:"",
    phone: "",
    website: "",
    company: ""
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
            if(a !== "address" && a !== "company" && a !== "id")
            {
                var td = document.createElement("td");
                td.innerHTML = user[a];
                tr.appendChild(td);
            }
            else if (a == "address")
            {
                var td = document.createElement("td");
                geoLoc = user[a].geo.lat +"<br>"+ user[a].geo.lng;
                fullAddress = user[a].street + "<br>" + user[a].suite + "<br>" + user[a].city + "<br>" + user[a].zipcode + "<br>" + geoLoc;
                td.innerHTML = fullAddress;
                tr.appendChild(td);
            }
            else if (a == "company")
            {
                var td = document.createElement("td");
                td.innerHTML = user[a].name + "<br>" + user[a].catchPhrase + "<br>" + user[a].bs;
                tr.appendChild(td);
            }
            // else{
            //     var td = document.createElement("td");
            //     td.innerHTML = user[a];
            //     tr.appendChild(td);
            // }
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

