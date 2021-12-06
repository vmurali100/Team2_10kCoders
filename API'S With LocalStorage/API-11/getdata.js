var data = JSON.parse(localStorage.getItem("data10"))
function getData() {
    if (!data) {
        var getInfo = new XMLHttpRequest()
        getInfo.onreadystatechange = function () {
            if (getInfo.status == 200 && getInfo.readyState == 4) {
                var data10 = getInfo.response
                localStorage.setItem("data10", data10)
                data = JSON.parse(localStorage.getItem("data10"))
            }
        }
        getInfo.open("GET", "https://jsonplaceholder.typicode.com/albums")
        getInfo.send()
        table()
    }
    else{
        table()
    }
}
getData()