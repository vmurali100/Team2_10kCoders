let API_URL = "http://localhost:3000/comments/"
var getAllData = []
function getData() {
    var getInfo = new XMLHttpRequest();
    getInfo.onreadystatechange = function () {
        if (getInfo.status == 200 && getInfo.readyState == 4) {
            getAllData = JSON.parse(getInfo.response)
            console.log(getAllData)
            display()
        };
    };
    getInfo.open('GET', API_URL);
    getInfo.send();

}
getData();