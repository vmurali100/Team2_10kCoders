function displayUsers() {
    console.log(user)

    //clear the table body
    document.querySelector("tbody").innerHTML = "";

    user.forEach((users) => {
        var myTr = document.createElement("tr")
        document.querySelector("tbody").appendChild(myTr)

    })
}