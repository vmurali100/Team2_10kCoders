var data = JSON.parse(localStorage.getItem("data55"))
function getData() {
    if (!data) {
        var getInfo = new XMLHttpRequest();
        getInfo.open('GET', 'http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true');
        getInfo.send();
        getInfo.onreadystatechange = function () {
            if (getInfo.status == 200 && getInfo.readyState == 4) {
                var data = JSON.parse(getInfo.response)
                localStorage.setItem("data55", JSON.stringify(data))
                display(data)
            };
        };

    }
    else {
        display(data)
    }
} 