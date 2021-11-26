var data = JSON.parse(localStorage.getItem("data2"))
function getData() {
    if (!data) {
        var getInfo = new XMLHttpRequest()
        getInfo.onreadystatechange = function () {
            if (getInfo.status == 200 && getInfo.readyState == 4) {
                var data2 = getInfo.response
                localStorage.setItem("data2", data2)
                data = JSON.parse(localStorage.getItem("data2"))
                table()
            }
        }
        getInfo.open("GET", "http://www.filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true")
        getInfo.send()
    }
    else {
        table()
    }
}
getData()