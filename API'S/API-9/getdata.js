var data = JSON.parse(localStorage.getItem("data8"));
function getData() {
    if (!data) {
        var getInfo = new XMLHttpRequest()
        getInfo.onreadystatechange = function () {
            if (getInfo.status == 200 && getInfo.readyState == 4) {
                var data8 = getInfo.response
                localStorage.setItem("data8", data8)
                data = JSON.parse(localStorage.getItem("data8"))
            }
        }
        getInfo.open("GET", "https://jsonplaceholder.typicode.com/todos")
        getInfo.send()
        table()
    }
    else{
       table()
    }
}
getData()