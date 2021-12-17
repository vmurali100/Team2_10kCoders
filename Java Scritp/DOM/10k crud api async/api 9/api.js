var API_URL = 'http://localhost:3000/users/'
var allUsers = []
function getData() {
    return new Promise((resolve) => {
        var getInfo = new XMLHttpRequest();
        getInfo.onreadystatechange = function () {
            if (getInfo.status == 200 && getInfo.readyState == 4) {
                resolve(JSON.parse(getInfo.response));
            };
        }
        getInfo.open('GET', API_URL);
        getInfo.send();
    })

}
async function handleUser() {
    allUsers = await getData()
    display()
}
handleUser()