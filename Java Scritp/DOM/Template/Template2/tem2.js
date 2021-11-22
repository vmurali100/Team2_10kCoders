var users = JSON.parse(localStorage.getItem('persons'));
users.forEach((user, i) => {
    var myTr = document.createElement("tr");
    var indexTd = document.createElement("td")
    indexTd.innerHTML = i + 1
    myTr.appendChild(indexTd)
    for (a in user) {
        var myTd = document.createElement("td")
        myTd.innerHTML = user[a]
        myTr.appendChild(myTd)
    }
    document.querySelector("tbody").appendChild(myTr)
})