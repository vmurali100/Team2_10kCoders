function table() {
    allUsers.forEach((user, i) => {
        var tr = document.createElement("tr")
        document.querySelector("tbody").appendChild(tr)
        for (a in user) {
            var td = document.createElement("td")
            if(a=="url" || a=="thumbnailUrl"){
                var imgtd = document.createElement("img")
                imgtd.setAttribute("src",user[a])
                imgtd.style.height="150px"
                imgtd.style.width="150px"
                td.appendChild(imgtd)
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
function updateUser() {
    var user = { ...allUsers[index] }
    for (a in user) {
        user[a] = document.getElementById(a).value
    }
    var UPDATE_URL = API_URL + user.id
    var getInfo = new XMLHttpRequest()
    getInfo.onreadystatechange = function () {
        if (getInfo.readyState == 4 && getInfo.status == 200) {
            allUsers = JSON.parse(getInfo.response)
            console.log(allUsers)
            table()
        }
    }
    getInfo.open("PUT", UPDATE_URL)
    getInfo.setRequestHeader("content-type","application/json")
    getInfo.send(JSON.stringify(user))
}
function del(i){
    DEL_URL = API_URL+allUsers[i].id
    var getInfo = new XMLHttpRequest()
    getInfo.onreadystatechange = function(){
    if(getInfo.readyState==4 && getInfo.status == 200){
        allUsers = JSON.parse(getInfo.response)
        console.log(allUsers)
        table()
    }
}
getInfo.open("DELETE",DEL_URL)
getInfo.send()
}