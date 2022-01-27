function table() {
    data = JSON.parse(localStorage.getItem("data8"))
    document.querySelector("tbody").innerHTML = " "
    data.forEach((user, i) => {
        var tr = document.createElement("tr")
        document.querySelector("tbody").appendChild(tr)
        for (a in user) {
            var td = document.createElement("td")
            td.innerText = user[a]
            tr.appendChild(td)
        }
        var editTD = document.createElement("td")
        tr.appendChild(editTD)
        var editBtn = document.createElement("button")
        editTD.appendChild(editBtn)
        editBtn.innerText = "Edit"
        editBtn.setAttribute("type", "button")
        editBtn.setAttribute("class", "btn btn-warning")
        editBtn.setAttribute("onclick", "edit(" + i + ")")

        var delTD = document.createElement("td")
        tr.appendChild(delTD)
        var delBtn = document.createElement("button")
        delTD.appendChild(delBtn)
        delBtn.innerText = "Delete"
        delBtn.setAttribute("type", "button")
        delBtn.setAttribute("class", "btn btn-danger")
        delBtn.setAttribute("onclick", "del(" + i + ")")

    })
}
var index
function edit(i) {
    index = i;
    for (a in user) {
        document.getElementById(a).value = data[i][a]

    }
    document.getElementById("update").style.display = "block"
    document.getElementById("submit").style.display = "none"
}

function updateUser(){
    for(a in user){
        user[a] = document.getElementById(a).value
    }
    document.getElementById("update").style.display="none"
    document.getElementById("submit").style.display="block"
    var data8 = JSON.parse(localStorage.getItem("data8"))
    data8[index] = {...user}
    localStorage.setItem("data8",JSON.stringify(data8))
    table()
}

function del(i){
    var data8 = JSON.parse(localStorage.getItem("data8"))
    data8.splice(i,1)
    data8 = localStorage.setItem("data8",JSON.stringify(data8))
    table()
}