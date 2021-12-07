user = {
    title : "",
    price : "",
    description: "",
    category:"",
    image:"",
    rating:{
        rate : "",
        count: ""
    }
}
var users = [];
function display(data)
{ 
    
    users = data;
    document.getElementById("thead").style.display = "table-header-group"
    document.querySelector("tbody").innerHTML = "";
    users.forEach((user,i)=>{
        var tr = document.createElement("tr");
        var slno = document.createElement("td");
        slno.innerHTML = i+1;
        tr.appendChild(slno);
        for(a in user){
            if(a!=="id" && a !== "image" && a!=="rating")
            {
                var td = document.createElement("td");
                td.innerHTML = user[a];
                tr.appendChild(td);
            }
            else if(a == "image")
            {
                var img = document.createElement("img");
                var td = document.createElement("td");
                img.setAttribute("src",user[a]);
                img.setAttribute("width","100px");
                img.setAttribute("height","100px");
                td.appendChild(img)
                tr.appendChild(td);
            }
            else if(a == "rating")
            {
                var rating = "";
                var td = document.createElement("td");
                for(b in user[a])
                {
                    rating += b + " : " + user[a][b] + "<br>";
                }
                td.innerHTML =rating;
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

