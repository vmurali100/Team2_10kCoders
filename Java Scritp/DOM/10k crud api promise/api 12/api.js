var data = JSON.parse(localStorage.getItem("data12"))
function getData() {
    if (!data || data.length == 0) {
        var getInfo = new XMLHttpRequest();
        getInfo.open('GET', 'https://fakestoreapi.com/carts');
        getInfo.send();
        getInfo.onreadystatechange = function () {
            if (getInfo.status == 200 && getInfo.readyState == 4) {
                var data = JSON.parse(getInfo.response)
                localStorage.setItem("data12", JSON.stringify(data))
                display(data)
            };
        };

    }
    else {
        display(data)
    }
}