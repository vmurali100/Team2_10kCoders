function table() {
    document.querySelector("tbody").innerText = " "
    users.forEach((user, i) => {
        var tr = document.createElement("tr")
        document.querySelector("tbody").appendChild(tr)
        for(a in user){
            if(a!=="address"){
                if(a =="name"){
                    var td = document.createElement("td")
                    td.innerText = user[a].firstname+ " "+user[a].lastname
                    tr.appendChild(td)
                    continue
                }
                var td = document.createElement("td")
                td.innerText = user[a]
                tr.appendChild(td)
            }
        }
        var editTd = document.createElement("td")
        tr.appendChild(editTd)
        var editBtn = document.createElement("button")
        editBtn.innerText = "Edit"
        editBtn.setAttribute("type","button")
        editBtn.setAttribute("class","btn btn-primary")
        editBtn.setAttribute("onclick","edit("+ i +")")
        editTd.appendChild(editBtn)
    });
}

var index;
function edit(i){
    index=i;
    for(a in user){
        document.getElementById(a).value = users[i][a]
        document.getElementById("update").style.display = "block"
        document.getElementById("submit").style.display = "none"
    }
}

function updateuser(){
    for(a in user){
        user[a]= document.getElementById(a).value
}
users[index]=({...user})
localStorage.setItem("users",JSON.stringify(users))
table()
document.getElementById("update").style.display = "none"
document.getElementById("submit").style.display = "block"
}
