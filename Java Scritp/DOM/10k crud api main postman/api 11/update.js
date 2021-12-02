function updatePerson() {
    var person = { ...getAllUsers[index] }
    for (a in person) {
        person[a] = document.getElementById(a).value;
    }
    let UPDATE_URL = API_URL + person.id;
    var getInfo = new XMLHttpRequest();
    getInfo.onreadystatechange = function () {
        if (getInfo.status == 200 && getInfo.readyState == 4) {
            getAllUsers = JSON.parse(getInfo.response)
            console.log(getAllUsers)
            display()
        };
    };
    getInfo.open('PUT', UPDATE_URL);
    getInfo.setRequestHeader("content-type", "application/json")
    getInfo.send(JSON.stringify(person));
}