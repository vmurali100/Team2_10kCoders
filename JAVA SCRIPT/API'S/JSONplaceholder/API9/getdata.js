var data = JSON.parse(localStorage.getItem("data6"));
function getData() {
    if (!data) {
        var getInfo = new XMLHttpRequest()
        getInfo.onreadystatechange = function () {
            if (getInfo.status == 200 && getInfo.readyState == 4) {
                var data6 = getInfo.response
                localStorage.setItem("data6", data6)
                data = JSON.parse(localStorage.getItem("data6"))
            }
        }
        getInfo.open("GET", "https://jsonplaceholder.typicode.com/users")
        getInfo.send()
        table()
    }
    else{
       table()
    }
}
getData()