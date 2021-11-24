var user = []
function addUser() {
    // var person = {
    //     fname: document.getElementById("fname").value,
    //     lname: document.getElementById("lname").value,
    //     email: document.getElementById("email").value

    // }
    var person = {
        fname: "",
        lname: "",
        email: ""

    }
    for (a in person) {
        person[a] = document.getElementById(a).value
    }
    user.push(person)
    console.log(user)



    displayUsers()



    clearForm()
}


