let API_URL = "  http://localhost:3000/comments/";
var allComments = [];
function getAllComments() {
    var getInfo = new XMLHttpRequest();
    getInfo.onreadystatechange = function () {
        if (getInfo.readyState == 4 && getInfo.status == 200) {
            allComments = JSON.parse(getInfo.response);

            console.log(allComments)
            displayComments()

        }
    };
    getInfo.open("GET", API_URL);
    getInfo.send()
}

function displayComments() {
    allComments.forEach((comment, i) => {
        var myTr = document.createElement("tr");

        for (a in comment) {

            var myTd = document.createElement("td");
            myTd.innerHTML = comment[a];
            myTr.appendChild(myTd);


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
getAllComments();

function editUser(i) {
    index = i;
    for (a in allComments[i]) {
        if (a !== "postId") {
            document.getElementById(a).value = allComments[i][a]
        }
    }

    console.log(allComments[i])
}


function deleteUser(i) {
    console.log(allComments[i])
    var DEL_URL = API_URL + allComments[i].id
    var getInfo = new XMLHttpRequest();
    getInfo.onreadystatechange = function () {
        if (getInfo.readyState == 4 && getInfo.status == 200) {
            allComments = JSON.parse(getInfo.response);

            console.log(allComments)
            displayComments()

        }
    };
    getInfo.open("DELETE", DEL_URL);
    getInfo.send()
}

function updateUser() {
    let comment = { ...allComments[index] }

    for (a in comment) {
        if (a !== "postId") {
            comment[a] = document.getElementById(a).value
        }
    }
    let UPDATE_URL = API_URL + comment.id
    var getInfo = new XMLHttpRequest();
    getInfo.onreadystatechange = function () {
        if (getInfo.readyState == 4 && getInfo.status == 200) {
            allComments = JSON.parse(getInfo.response);

            console.log(allComments)
            displayComments()

        }
    };
    getInfo.open("PUT", UPDATE_URL);
    getInfo.setRequestHeader("Content-type", "application/json")
    getInfo.send(JSON.stringify(comment))
    console.log(comment)
}


