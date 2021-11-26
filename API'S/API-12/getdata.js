var data = JSON.parse(localStorage.getItem("data11"))
function getData() {
    if (!data) {
        var getInfo = new XMLHttpRequest()
        getInfo.onreadystatechange = function () {
            if (getInfo.status == 200 && getInfo.readyState == 4) {
                var data11 = getInfo.response
                localStorage.setItem("data11", data11)
                data = JSON.parse(localStorage.getItem("data11"))
            }
        }
        getInfo.open("GET", "https://jsonplaceholder.typicode.com/photos")
        getInfo.send()
        table()
    }
    else{
        table()
    }
}
getData()