//get all users
let API_URL = "http://localhost:3000/users/"
var allusers = []
function getallUsers() {
    var getInfo = new XMLHttpRequest()
    getInfo.onreadystatechange = function () {
        if (getInfo.readyState == 4 && getInfo.status == 200) {
            allusers = JSON.parse(getInfo.response)
            console.log(allusers)
            displayUsers()
        }
    }
    getInfo.open("GET", API_URL)
    getInfo.send()


}
function displayUsers() {
    allusers.forEach((user, i) => {
        var myTr = document.createElement("tr")
        for (a in user) {

            if (a !== "address" && a !== "name" && a !== "__v") {
                var myTd = document.createElement("td")
                myTd.innerHTML = user[a]
                myTr.appendChild(myTd)
            } else if (a == "address") {
                var myTd = document.createElement("td")
                myTd.innerHTML = user[a].city
                myTr.appendChild(myTd)
            } else if (a == "name") {
                var myTd = document.createElement("td")
                myTd.innerHTML = user[a].firstname + " " + user[a].lastname
                myTr.appendChild(myTd)
            }

        }

        //to display address
        // var myTd = document.createElement("td")
        // myTd.innerHTML = user.address.city
        // myTr.appendChild(myTd)

        // var myTd = document.createElement("td")
        // myTd.innerHTML = user.email
        // myTr.appendChild(myTd)

        //to edit the user data
        var editd = document.createElement("td")
        var editbtn = document.createElement("button")
        editbtn.innerHTML = "edit"
        editbtn.setAttribute("class", "btn btn-warning")
        editbtn.setAttribute("onclick", "editUser(" + i + ")")
        editd.appendChild(editbtn)
        myTr.appendChild(editd)

        //to delete the user data
        var deletetd = document.createElement("td")
        var deletebtn = document.createElement("button")
        deletebtn.innerHTML = "DELETE"
        deletebtn.setAttribute("class", "btn btn-danger")
        deletebtn.setAttribute("onclick", "deleteUser(" + i + ")")
        deletetd.appendChild(deletebtn)
        myTr.appendChild(deletetd)



        document.querySelector("tbody").appendChild(myTr)
    })
}
getallUsers()

function editUser(i) {
    console.log(allusers[i])

}
function deleteUser(i) {
    console.log(allusers[i])
    var DEL_URL = API_URL + allusers[i].id
    var getInfo = new XMLHttpRequest()
    getInfo.onreadystatechange = function () {
        if (getInfo.readyState == 4 && getInfo.status == 200) {
            allusers = JSON.parse(getInfo.response)
            console.log(allusers)
            displayUsers()
        }
    }
    getInfo.open("DELETE", DEL_URL)
    getInfo.send()

}