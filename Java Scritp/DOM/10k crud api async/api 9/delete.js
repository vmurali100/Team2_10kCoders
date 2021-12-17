function deletePerson(i) {
    var DEL_URL = API_URL + allUsers[i].id;
    var getInfo = new XMLHttpRequest();
    getInfo.onreadystatechange = function () {
        if (getInfo.status == 200 && getInfo.readyState == 4) {
            allUsers = JSON.parse(getInfo.response)
            console.log(allUsers)
            display();
        };
    }
    getInfo.open('DELETE', DEL_URL);
    console.log(DEL_URL)
    getInfo.send();
}