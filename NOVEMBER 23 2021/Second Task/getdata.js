var users;
function getData() {
    var getInfo = new XMLHttpRequest()
    getInfo.onreadystatechange = function () {
        if (getInfo.status == 200 && getInfo.readyState == 4) {
            users = getInfo.response
            localStorage.setItem("users",users)
            users = JSON.parse(users)
            console.log(users)
            table()
            
        }
    }
    getInfo.open("GET", "https://fakestoreapi.com/users")
    getInfo.send()
}
getData()