let API_URL = "http://localhost:3000/comment"
allComments = []
function getAllComments() {

    var getComments = new XMLHttpRequest()
    getComments.onreadystatechange = function () {
        if (getComments.readyState == 4 && getComments.status == 200) {
            allComments = JSON.parse(getComments.response)
            console.log(allComments)
            displayComments
        }
    }
    getComments.open("GET", API_URL)
    getComments.send()

}
function displayComments() {
    allComments.forEach((comments) => {
        var myTr = document.createElement("tr")
        var myTd = document.createElement("td")
        myTd.innerHTML = comments.body
        myTr.appendChild(myTd)

        document.querySelector("tbody").appendChild(myTr)

    })
}

getAllComments()