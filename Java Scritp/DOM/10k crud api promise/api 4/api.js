var API_URL = 'http://localhost:3000/posts/'
getAllUsers = []
function getData() {
    return new Promise((resolve)=>{
        var getInfo = new XMLHttpRequest();
        getInfo.onreadystatechange = function () {
            if (getInfo.status == 200 && getInfo.readyState == 4) {
                getAllUsers = JSON.parse(getInfo.response)
                console.log(getAllUsers)
                resolve()
            };
        };
        getInfo.open('GET', API_URL);
        getInfo.send();
    })
}
getData().then(()=>{
    display()
})