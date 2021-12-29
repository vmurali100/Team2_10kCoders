user = {
    name : "",
    username : "",
    email : "",
    address : {
        street : "",
        suite : "",
        city : "",
        zipcode : "",
        geo : {
            lat : "",
            lng : ""
        }
    },
    phone: "",
    website: "",
    company: {
        name : "",
        catchPhrase : "",
        bs : ""
    }
};

// users = data;
function display(data)
{ 
    users = data;
    document.getElementById("thead").style.display = "table-header-group"
    document.querySelector("tbody").innerHTML = "";
    users.forEach((user,i)=>
    {
        var tr = document.createElement("tr");
        var slno = document.createElement("td");
        slno.innerHTML = i+1;
        tr.appendChild(slno);

        for(a in user)
        {
            if(a !== "address" && a !== "company" && a !== "id")
            {
                var td = document.createElement("td");
                td.innerHTML = user[a];
                tr.appendChild(td);
            }

            else if (a == "address")
            {
                var full_Address = "";
                var td = document.createElement("td");
                for(b in user[a])
                {
                    if(b !== "geo")
                    {
                        full_Address  += b + " : " + user[a][b]  + "<br>";
                    }
                    else
                    {
                        for(c in user[a][b])
                        {
                            full_Address += c + " : "  + user[a][b][c] + "<br>";
                            
                        }

                    }
                }
                td.innerHTML = full_Address;
                tr.appendChild(td);
                
            }
            else if (a == "company")
            {
                var company = "";
                var td = document.createElement("td");
                for(b in user[a])
                {
                    company += b + " : " +  user[a][b] + "<br>";
                }
                td.innerHTML =company;
                tr.appendChild(td);
            }
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
