function handleUpdate(person) {
    return new Promise((resolve) => {
        var UPDATE_URL = API_URL + person.id;
        var getInfo = new XMLHttpRequest();
        getInfo.onreadystatechange = function () {
            if (getInfo.status == 200 && getInfo.readyState == 4) {
                resolve()

            }
        }
        getInfo.open("PUT", UPDATE_URL);
        getInfo.setRequestHeader("content-type", "application/json")
        getInfo.send(JSON.stringify(person));
    })
}
function updatePerson() {
    let person = { ...getAllUsers[index] }
    for (a in person) {
        if (a !== "address" && a !== "__v" && a !== "name") {
            person[a] = document.getElementById(a).value;
        } else if (a == "name") {
            for (k in person[i][a]) {
                person[i][a][k] = document.getElementById(k).value
            }
        }
    }
    handleDelete(person).then(() => {
        display();
    })
}