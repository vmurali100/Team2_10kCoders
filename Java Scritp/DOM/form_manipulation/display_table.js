function displayUsers() {
    document.querySelector("tbody").innerHTML = ""

    users.forEach((user) => {
        var myTr = document.createElement("tr")
        document.querySelector("tbody").appendChild(myTr)
        // myTr.appendChild(user)
        for (a in user) {
            var myTd = document.createElement("td")
            myTd.innerHTML = user[a]
            myTr.appendChild(myTd)
        }
    });
}