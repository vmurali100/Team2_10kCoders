var data = JSON.parse(localStorage.getItem("data5"))
function getData() {
    if (!data) {
        var getInfo = new XMLHttpRequest()
        getInfo.onreadystatechange = function () {
            if (getInfo.status == 200 && getInfo.readyState == 4) {
                var data5 = getInfo.response
                localStorage.setItem("data5", data5)
                data = JSON.parse(localStorage.getItem("data5"))
                table()
            }
        }
        getInfo.open("GET", "https://fakestoreapi.com/products")
        getInfo.send()
    }
    else {
        table()
    }
}
getData()