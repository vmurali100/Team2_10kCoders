var data = JSON.parse(localStorage.getItem("data3"))
function getData() {
    if (!data) {
        var getInfo = new XMLHttpRequest();
        getInfo.open('GET', 'https://fakestoreapi.com/users');
        getInfo.send();
        getInfo.onreadystatechange = function () {
            if (getInfo.status == 200 && getInfo.readyState == 4) {
                var data = JSON.parse(getInfo.response)
                localStorage.setItem("data3", JSON.stringify(data))
                display(data)
            };
        };

    }
    else {
        display(data)
    }
}