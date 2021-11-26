
data = JSON.parse(localStorage.getItem("data1"))
getData()
function getData() {
    if (!data) {
        var getInfo = new XMLHttpRequest();
        getInfo.onreadystatechange = function () {
            if (getInfo.status == 200 && getInfo.readyState == 4) {
                data = getInfo.response
                localStorage.setItem("data1", JSON.stringify(data))
                data = JSON.parse(data)

            }
        }
        getInfo.open("GET", "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true")
        getInfo.send()
        console.log("GOING into if condition")
       tabel()
    }
    else{
        tabel()
    }
}