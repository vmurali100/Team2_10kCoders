function handleDelete(i) {
    return new Promise((resolve) => {
        var DEL_URL = API_URL + getAllUsers[i].id;
        var getInfo = new XMLHttpRequest();
        getInfo.onreadystatechange = function () {
            if (getInfo.status == 200 && getInfo.readyState == 4) {
                resolve()
            }
        }
        getInfo.open("DELETE", DEL_URL);
        getInfo.send();
    })
}
async function deletePerson(i) {
    let response = await handleDelete(i)
    display();
}