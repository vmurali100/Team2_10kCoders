var data = JSON.parse(localStorage.getItem("exdata1"))
function getData() {
    if (!data) {
        var getInfo = new XMLHttpRequest()
        getInfo.onreadystatechange = function () {
            if (getInfo.status == 200 && getInfo.readyState == 4) {
                data = getInfo.response
                localStorage.setItem("dataex1",JSON.stringify(data))
                data = JSON.parse(data)
                console.log(data)
            }
        }
        getInfo.open("GET", "https://fakestoreapi.com/users")
        getInfo.send()
    }
    else{
        console.log("execute ELSE BLOCK")
    }
}
getData()