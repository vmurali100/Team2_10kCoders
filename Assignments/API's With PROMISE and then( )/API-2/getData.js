var API_URL = "http://localhost:3000/user2/"
var allUsers = []
function getData() {
    return new Promise((sucess) => {
        var getInfo = new XMLHttpRequest()
        getInfo.onreadystatechange = function () {
            if (getInfo.status == 200 && getInfo.readyState == 4) {
                allUsers = JSON.parse(getInfo.response)
                console.log(allUsers)
                sucess()
            }
        }
        getInfo.open("GET", "http://localhost:3000/user2/")
        getInfo.send()
    })
}
getData().then(()=>{ table() })