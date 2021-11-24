

var data = JSON.parse(localStorage.getItem("data2"))
function getData() {
    if (!data) {
        var getInfo = new XMLHttpRequest();
        getInfo.open('GET', 'https://fakestoreapi.com/products');
        getInfo.send();
        getInfo.onreadystatechange = function () {
            if (getInfo.status == 200 && getInfo.readyState == 4) {
                var data = JSON.parse(getInfo.response)
                localStorage.setItem("data2", JSON.stringify(data))
                console.log(data2)
                display(data)
            };
        };

    }
    else {
        display(data)
    }
}