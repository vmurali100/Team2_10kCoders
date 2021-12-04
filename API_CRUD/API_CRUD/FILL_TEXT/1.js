let API_URL = " http://localhost:3000/posts/"//data location
var allposts = []
function getAllPosts() {
    var getData = new XMLHttpRequest()
    getData.onreadystatechange = function () {
        if (getData.readyState == 4 && getData.status == 200) {
            allposts = JSON.parse(getData.response)
            console.log(allposts)
            displayPosts()
        }
    }
    getData.open("GET", API_URL)
    getData.send()
}
function displayPosts() {
    allposts.forEach((post, i) => {
        var myTr = document.createElement("tr")
        for (a in post) {

            var myTd = document.createElement("td")
            myTd.innerHTML = post[a]
            myTr.appendChild(myTd)

        }

        //to edit

        var editTd = document.createElement("td")
        var editbtn = document.createElement("button")
        editbtn.innerHTML = "EDIT"
        editbtn.setAttribute("class", "btn btn-warning")
        editbtn.setAttribute("onclick", "editPost(" + i + ")")
        editTd.appendChild(editbtn)
        myTr.appendChild(editTd)

        //to delete
        var deletetd = document.createElement("td")
        var deletebtn = document.createElement("button")
        deletebtn.innerHTML = "DELETE"
        deletebtn.setAttribute("class", "btn btn-danger")
        deletebtn.setAttribute("onclick", "deletePost(" + i + ")")
        deletetd.appendChild(deletebtn)
        myTr.appendChild(deletetd)

        document.querySelector("tbody").appendChild(myTr)
    })
}
getAllPosts()


function editPost(i) {
    index = i
    for (a in allposts[i]) {
        document.getElementById(a).value = allposts[i][a]
    }
    console.log(allposts[i])
}
function deletePost(i) {

    console.log(allposts[i])
    var DEL_URL = API_URL + allposts[i].id
    var getData = new XMLHttpRequest()

    getData.onreadystatechange = function () {
        if (getData.readyState == 4 && getData.status == 200) {
            allposts = JSON.parse(getData.response)
            console.log(allposts)
            displayPosts()
        }
    }
    getData.open("DELETE", DEL_URL)
    getData.send()

}
function updatePost() {
    let post = { ...allposts[index] }
    for (a in post) {
        post[a] = document.getElementById(a).value
    }

    var UPDATE_URL = API_URL + post.id
    var getData = new XMLHttpRequest()
    getData.onreadystatechange = function () {
        if (getData.readyState == 4 && getData.status == 200) {
            allposts = JSON.parse(getData.response)
            console.log(allposts)
            displayPosts()
        }
    }
    getData.open("PUT", UPDATE_URL)
    getData.setRequestHeader("content-Type", "application/json")
    getData.send(JSON.stringify(post))
}
