var data = JSON.parse(localStorage.getItem("data7"));
function getData() {
    if (!data) {
        var getInfo = new XMLHttpRequest()
        getInfo.onreadystatechange = function () {
            if (getInfo.status == 200 && getInfo.readyState == 4) {
                var data7 = getInfo.response
                localStorage.setItem("data7", data7)
                data = JSON.parse(localStorage.getItem("data7"))
            }
        }
        getInfo.open("GET", "https://jsonplaceholder.typicode.com/posts")
        getInfo.send()
        table()
    }
    else{
       table()
    }
}
getData()