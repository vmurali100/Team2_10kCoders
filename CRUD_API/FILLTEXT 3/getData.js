NAME_URL = "http://localhost:3000/name"
function allData(){
    allName = []
    var getInfo = new XMLHttpRequest();
    getInfo.onreadystatechange = function () {
        if (getInfo.status == 200 && getInfo.readyState == 4) {
            allName = JSON.parse(getInfo.response);
            console.log("function");
            displayName()
        }

    }
    getInfo.open("GET", NAME_URL);
    getInfo.send()
}
allData()