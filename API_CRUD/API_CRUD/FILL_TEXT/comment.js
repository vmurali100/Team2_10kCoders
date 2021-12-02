let API_URL = "http://localhost:3000/comment/"
allComments = []
function getAllComments() {

    var getComments = new XMLHttpRequest()
    getComments.onreadystatechange = function () {
        if (getComments.readyState == 4 && getComments.status == 200) {
            allComments = JSON.parse(getComments.response)
            console.log(allComments)
            displayComments()
        }
    }
    getComments.open("GET", API_URL)
    getComments.send()

}
function displayComments() {
    allComments.forEach((comments, i) => {
        var myTr = document.createElement("tr")
        for (a in comments) {
            var myTd = document.createElement("td")
            myTd.innerHTML = comments[a]
            myTr.appendChild(myTd)
        }


        //to edit
        var edittd = document.createElement("td")
        var editbtn = document.createElement("button")
        edittd.appendChild(editbtn)
        editbtn.innerHTML = "EDIT"
        editbtn.setAttribute("class", "btn btn-warning")
        editbtn.setAttribute("onclick", "editcomments(" + i + ")")

        myTr.appendChild(edittd)


        //to delete
        var deletetd = document.createElement("td")
        var deletebtn = document.createElement("button")
        deletetd.appendChild(deletebtn)
        deletebtn.innerHTML = "DELETE"
        deletebtn.setAttribute("class", "btn btn-danger")
        deletebtn.setAttribute("onclick", "deleteComments(" + i + ")")
        myTr.appendChild(deletetd)


        // var myTd = document.createElement("td")
        // myTd.innerHTML = comments.body
        // myTr.appendChild(myTd)

        // var myTd = document.createElement("td")
        // myTd.innerHTML = comments.email
        // myTr.appendChild(myTd)

        // var myTd = document.createElement("td")
        // myTd.innerHTML = comments.id
        // myTr.appendChild(myTd)


        // var myTd = document.createElement("td")
        // myTd.innerHTML = comments.name
        // myTr.appendChild(myTd)


        // var myTd = document.createElement("td")
        // myTd.innerHTML = comments.postId
        // myTr.appendChild(myTd)

        document.querySelector("tbody").appendChild(myTr)

    })
}

getAllComments()


function editcomments(i) {
    index = i
    for (a in allComments[i]) {
        document.getElementById(a).value = allComments[i][a]
    }
    console.log(allComments[i])
}
function deleteComments(i) {
    console.log(allComments[i])
    var DEL_URL = API_URL + allComments[i].id
    var getComments = new XMLHttpRequest()
    getComments.onreadystatechange = function () {
        if (getComments.readyState == 4 && getComments.status == 200) {
            allComments = JSON.parse(getComments.response)
            console.log(allComments)
            displayComments()
        }
    }
    getComments.open("DELETE", DEL_URL)
    getComments.send()
}
function updateComments() {
    let comments = { ...allComments[index] }
    for (a in comments) {
        comments[a] = document.getElementById(a).value


    }
    let update_url = API_URL + comments.id
    var getComments = new XMLHttpRequest()
    getComments.onreadystatechange = function () {
        if (getComments.readyState == 4 && getComments.status == 200) {
            allComments = JSON.parse(getComments.response)
            console.log(allComments)
            displayComments()
        }
    }
    getComments.open("PUT", update_url)
    getComments.setRequestHeader("content-type", "application/json")
    getComments.send(JSON.stringify(comments))

    console.log(comments)
}