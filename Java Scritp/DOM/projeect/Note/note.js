var api = "http://localhost:3000/note"
var text = {
    note: ""
}
var data = []

function toApi() {
    text.note = document.getElementById("note").value
    var getInfo = new XMLHttpRequest();
    getInfo.open("POST", api)
    getInfo.setRequestHeader("content-type", "application/json")
    getInfo.send(JSON.stringify(text))
    getInfo.onreadystatechange = function () {
        if (getInfo.readyState == 4 && getInfo.status == 200) {
            getData()
        }
    }

}

function getData() {
    var getInfo = new XMLHttpRequest();
    getInfo.onreadystatechange = function () {
        if (getInfo.status == 200 && getInfo.readyState == 4) {
            data = JSON.parse(getInfo.response);
            console.log(data)
            display()
        }
    }
    getInfo.open("GET", api);
    getInfo.send();
}

function display() {
    document.querySelector('tbody').innerHTML = ""
    data.forEach((nte, i) => {
        var myTr = document.createElement("tr")
        for (a in nte) {
            if (a == "note") {
                var myTd = document.createElement("td")
                myTd.innerHTML = nte.note;
                myTr.appendChild(myTd)
            }
            document.querySelector('tbody').appendChild(myTr)
        }
    })

}