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
async function updatePerson() {
    let person = { ...getAllUsers[index] }
    for (a in person) {
        if (a !== "rating" && a !== "__proto__") {
            person[a] = document.getElementById(a).value;
        }
    }
    let response = await handleUpdate(person)
    handleUser();

}