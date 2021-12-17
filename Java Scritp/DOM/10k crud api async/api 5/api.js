let API_URL = "http://localhost:3000/comments/"
var getAllData = []
function getData() {
    return new Promise((reslove) => {
        var getInfo = new XMLHttpRequest();
        getInfo.onreadystatechange = function () {
            if (getInfo.status == 200 && getInfo.readyState == 4) {
                reslove(JSON.parse(getInfo.response))
            };
        };
        getInfo.open('GET', API_URL);
        getInfo.send();
    })

}
async function handleUser() {
    getAllData = await getData()
    display()
}
handleUser();