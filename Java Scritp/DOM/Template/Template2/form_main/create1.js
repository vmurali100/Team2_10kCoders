var person = {
    fname: '',
    lname: '',
    email: '',
}

// var persons = []

function createPerson() {
    for (a in person) {
        person[a] = document.getElementById(a).value
    }
    users.push({ ...person });
    clear()
    displayPersons()
}