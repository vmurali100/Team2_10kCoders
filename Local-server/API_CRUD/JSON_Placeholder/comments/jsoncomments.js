
var USER_URL = "http://localhost:3000/comments/"
var datas = [];
function getUsersLocalHostData(){

    var fillText = new XMLHttpRequest;
    fillText.open("GET" , USER_URL);
    fillText.send();
    fillText.onreadystatechange = function (){
        if(fillText.readyState == 4 && fillText.status == 200){
            var cloudData = fillText.response ;
            console.log(cloudData);
            var datas = JSON.parse(cloudData);
            console.log(datas);
            displayElements(datas);
        }
    }

}