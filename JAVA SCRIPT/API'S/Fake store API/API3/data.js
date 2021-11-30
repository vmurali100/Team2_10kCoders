var data = JSON.parse(localStorage.getItem("data4"))
function getData() {
    if (!data) {
        var getInfo = new XMLHttpRequest()
        getInfo.onreadystatechange = function () {
            if (getInfo.status == 200 && getInfo.readyState == 4) {
                var data4 = getInfo.response
                localStorage.setItem("data4", data4)
                data = JSON.parse(localStorage.getItem("data4"))
                table()
            }
        }
        getInfo.open("GET", "https://fakestoreapi.com/users")
        getInfo.send()
    }
    else {
        table()
    }
}
getData()