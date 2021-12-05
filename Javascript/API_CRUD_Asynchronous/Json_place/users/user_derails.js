
let API_URL = "http://localhost:3000/users/";
var allUsers = [];
function getAllUsers() {
    return new Promise((resolve) => {
        var getInfo = new XMLHttpRequest();
        getInfo.onreadystatechange = function () {
            if (getInfo.readyState == 4 && getInfo.status == 200) {
                resolve(JSON.parse(getInfo.response))

            }
        };
        getInfo.open("GET", API_URL);
        getInfo.send()
    })
}

async function handleGetUsers() {
    allUsers = await getAllUsers()
    displayUsers()
}
handleGetUsers()

function displayUsers() {
    allUsers.forEach((user, i) => {
        var myTr = document.createElement("tr");

        for (a in user) {
            if (a !== "address" && a !== "company") {
                var myTd = document.createElement("td");
                myTd.innerHTML = user[a];
                myTr.appendChild(myTd);
            } else if (a == "address") {
                var myTd = document.createElement("td");
                myTd.innerHTML = user[a].city
                myTr.appendChild(myTd);
            }
            else if (a == "company") {
                var myTd = document.createElement("td");
                myTd.innerHTML = user[a].name
                myTr.appendChild(myTd);
            }

        }
        var EditTd = document.createElement("td");
        var editBtn = document.createElement("button");
        editBtn.innerHTML = "Edit";
        editBtn.setAttribute("class", "btn btn-warning");
        editBtn.setAttribute("onclick", "editUser(" + i + ")");
        EditTd.appendChild(editBtn);
        myTr.appendChild(EditTd);

        // to Delete
        var deleteTd = document.createElement("td");
        var deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.setAttribute("onclick", "deleteUser(" + i + ")");
        deleteBtn.setAttribute("class", "btn btn-danger");
        deleteTd.appendChild(deleteBtn);
        myTr.appendChild(deleteTd);

        document.querySelector('tbody').appendChild(myTr)


    })
}
getAllUsers();

function editUser(i) {
    index = i;
    for (a in allUsers[i]) {
        if (a !== "address" && a !== "company" && a !== "website")
            document.getElementById(a).value = allUsers[i][a]
    }


    console.log(allUsers[i])
}


function handleDelete(i){
    return new Promise((resolve)=>{
        var DEL_URL = API_URL + allUsers[i].id
        var getInfo = new XMLHttpRequest();
        getInfo.onreadystatechange = function () {
            if (getInfo.readyState == 4 && getInfo.status == 200) {
                resolve()
            }
        };
        getInfo.open("DELETE", DEL_URL);
        getInfo.send()
    })
}

async function deleteUser(i) {
let resonse = await handleDelete(i)
displayUsers()    
}

function handleUpdate(user){
    return new Promise((resolve)=>{
        let UPDATE_URL = API_URL + user.id
        var getInfo = new XMLHttpRequest();
        getInfo.onreadystatechange = function () {
            if (getInfo.readyState == 4 && getInfo.status == 200) {
                resolve()
            }
        };
        getInfo.open("PUT", UPDATE_URL);
        getInfo.setRequestHeader("Content-type", "application/json")
        getInfo.send(JSON.stringify(user))
        console.log(user)
    })
}
function updateUser() {
    let user = { ...allUsers[index] }

    for (a in user) {
        if (a !== "address " && a !== "company" && a !== "website") {
            user[a] = document.getElementById(a).value
        }
    }
   let response = handleUpdate(user)
   displayUsers()
}





