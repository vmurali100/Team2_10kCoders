var data = JSON.parse(localStorage.getItem("data11"))
function getData() {
    if (!data || data.length == 0) {
        var getInfo = new XMLHttpRequest();
        getInfo.open('GET', 'http://www.filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true');
        getInfo.send();
        getInfo.onreadystatechange = function () {
            if (getInfo.status == 200 && getInfo.readyState == 4) {
                var data = JSON.parse(getInfo.response)
                localStorage.setItem("data11", JSON.stringify(data))
                display(data)
            };
        };

    }
    else {
        display(data)
    }
}