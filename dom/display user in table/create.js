var person = {
    fname: "",
    lname: "",
    email: "",
}
var persons = []
function createPerson() {
    for (a in person) {
        person[a] = document.getElementById(a).value;
    }
    persons.push(person)
    console.log(person)
    clear()
    displayPersons()
}