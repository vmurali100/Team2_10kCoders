// var data = JSON.parse(localStorage.getItem("localData"))
var USER_URL = "http://localhost:3000/photos/"
 var datas = [];
function getUsersLocalHostData(){
//  if(!data){
    var fillText = new XMLHttpRequest;
    fillText.open("GET" , USER_URL);
    fillText.send();
    fillText.onreadystatechange = function (data){
        if(fillText.readyState == 4 && fillText.status == 200){
            var cloudData = fillText.response ;
            console.log(cloudData);
            var datas = JSON.parse(cloudData);
            console.log(datas);
            displayElements(datas);
            localStorage.setItem("localData" ,cloudData );
         
        }
    }
//  } else
//  {
//     displayElements(data);
//  }
    
}
getUsersLocalHostData();