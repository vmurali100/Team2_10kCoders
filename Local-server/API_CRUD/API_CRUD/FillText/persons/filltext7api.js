var USER_URL = "http://localhost:3000/person/"
var datas = [];
function getData(){
    var fillText = new XMLHttpRequest();
    fillText.open("GET", USER_URL);
    fillText.send();
    fillText.onreadystatechange = function (){
        if(fillText.readyState == 4 && fillText.status == 200){
            var cloudData = fillText.response ;
            console.log(cloudData);
             datas = JSON.parse(cloudData);
            console.log(datas);
            displayElements();
        }
    }
   
   
}
getData()
    
