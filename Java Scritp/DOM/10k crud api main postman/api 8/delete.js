function deletePerson(i) {
    let DEL_URL = API_URL + getAllUsers[i].id;
    var getInfo = new XMLHttpRequest();
    getInfo.onreadystatechange = function () {
        if (getInfo.status == 200 && getInfo.readyState == 4) {
            getAllUsers = JSON.parse(getInfo.response)
            console.log(getAllUsers)
            display()
        };
    };
    getInfo.open('DELETE', DEL_URL);
    getInfo.send();
}