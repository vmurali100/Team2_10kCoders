var data = JSON.parse(localStorage.getItem("data3"))
function getData() {
    if (!data) {
        var getInfo = new XMLHttpRequest()
        getInfo.onreadystatechange = function () {
            if (getInfo.status == 200 && getInfo.readyState == 4) {
                var data3 = getInfo.response
                localStorage.setItem("data3", data3)
                data = JSON.parse(localStorage.getItem("data3"))
                table()
            }
        }
        getInfo.open("GET", "https://fakestoreapi.com/carts")
        getInfo.send()
    }
    else {
        table()
    }
}
getData()