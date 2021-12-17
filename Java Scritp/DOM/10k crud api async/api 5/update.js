function handleUpdate(person) {
    return new Promise((resolve) => {
        var UPDATE_URL = API_URL + person.id;
        var getInfo = new XMLHttpRequest();
        getInfo.onreadystatechange = function () {
            if (getInfo.status == 200 && getInfo.readyState == 4) {
                resolve()
            };
        };
        getInfo.open("PUT", UPDATE_URL);
        getInfo.setRequestHeader("content-type", "application/json")
        getInfo.send(JSON.stringify(person));
    })
}
async function updatePerson() {
    let person = { ...getAllData[index] }
    for (a in person) {
        if (a !== "address" && a !== "__v") {
            person[a] = document.getElementById(a).value;
        }
    }
    let response = await handleUpdate(person)
    display()

}

// function updatePerson() {
//     let person = { ...getAllUsers[index] }
//     for (a in person) {
//         person[a] = document.getElementById(a).value;
//     }
//     var UPDATE_URL = API_URL + person.id;
//     var getInfo = new XMLHttpRequest();
//     getInfo.onreadystatechange = function () {
//         if (getInfo.status == 200 && getInfo.readyState == 4) {
//             getAllUsers = JSON.parse(getInfo.response);
//             display()

//         }
//     }
//     getInfo.open("PUT", UPDATE_URL);
//     getInfo.setRequestHeader("content-type", "application/json")
//     getInfo.send(JSON.stringify(person));
// }