function updatePerson() {
    let person = { ...getAllData[index] }
    for (a in person) {
        if (a !== "address" && a !== "__v") {
            person[a] = document.getElementById(a).value;
        }
    }

    var UPDATE_URL = API_URL + person.id;
    var getInfo = new XMLHttpRequest();
    getInfo.onreadystatechange = function () {
        if (getInfo.status == 200 && getInfo.readyState == 4) {
            getAllData = JSON.parse(getInfo.response)
            console.log(getAllData)
            display()
        };
    };
    getInfo.open("PUT", UPDATE_URL);
    getInfo.setRequestHeader("content-type", "application/json")
    getInfo.send(JSON.stringify(person));
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