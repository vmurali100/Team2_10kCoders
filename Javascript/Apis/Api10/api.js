var data = JSON.parse(localStorage.getItem("data10"))
function getData() {
    if (!data) {
        var getInfo = new XMLHttpRequest();
        getInfo.open('GET', 'http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true');
        getInfo.send();
        getInfo.onreadystatechange = function () {
            if (getInfo.status == 200 && getInfo.readyState == 4) {
                var data = JSON.parse(getInfo.response)
                localStorage.setItem("data10", JSON.stringify(data))
                display(data)
            };
        };

    }
    else {
        display(data)
    }
}