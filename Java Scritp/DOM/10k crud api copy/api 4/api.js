var data = JSON.parse(localStorage.getItem("data4"))
function getData() {
    if (!data) {
        var getInfo = new XMLHttpRequest();
        getInfo.open('GET', 'https://jsonplaceholder.typicode.com/posts');
        getInfo.send();
        getInfo.onreadystatechange = function () {
            if (getInfo.status == 200 && getInfo.readyState == 4) {
                var data = JSON.parse(getInfo.response)
                localStorage.setItem("data4", JSON.stringify(data))
                display(data)
            };
        };

    }
    else {
        display(data)
    }
}