function table(){
    allUsers.forEach((user,i)=>{
        var tr = document.createElement("tr")
        document.querySelector("tbody").appendChild(tr)
        for (a in user) {
            var td = document.createElement("td")
            if(a=="address"){
                td.innerText = user[a].city
                tr.appendChild(td)
                continue
            }else if(a=="name"){
                td.innerText = user[a].firstname+" "+user[a].lastname
                tr.appendChild(td)
                continue
            }
            tr.appendChild(td)
            td.innerText = user[a]
        }
        var editTd = document.createElement("td")
        tr.appendChild(editTd)
        var editBtn = document.createElement("button")
        editBtn.innerText = "Edit"
        editBtn.setAttribute("class", "btn btn-warning")
        editBtn.setAttribute("type", "button")
        editBtn.setAttribute("onclick", "edit(" + i + ")")
        editTd.appendChild(editBtn)

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
    index = i
    for (a in allUsers[i]) {
        document.getElementById(a).value = allUsers[i][a]
    }
}
function handleUpdate(user){
    return new Promise((sucess)=>{
        var UPDATE_URL = API_URL +user.id
        var getInfo = new XMLHttpRequest()
        getInfo.onreadystatechange = function(){
            if(getInfo.status == 200 && getInfo.readyState == 4){
                allUsers = JSON.parse(getInfo.reponse)
                sucess()
            }
        }
        getInfo.open("PUT",UPDATE_URL)
        getInfo.setRequestHeader("content-type","application/json")
        getInfo.send(JSON.stringify(user))
    })
}

function updateUser(){
    var user = {...allUsers[index]}
    for(a in user){
        user[a] = document.getElementById(a).value
    }
   handleUpdate(user).then(()=>{
       table()
   })
}

function handleDelete(i){
    return new Promise((resolve)=>{
        var DEL_URL = API_URL + allUsers[i].id
    var getInfo = new XMLHttpRequest()
    getInfo.onreadystatechange = function(){
        if(getInfo.status == 200 && getInfo.readyState == 4){
            resolve()
        }
    }
    getInfo.open("DELETE",DEL_URL)
    getInfo.send()
    })
}

function del(i){
    handleDelete(i).then(()=>{table()})
}