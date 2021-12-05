
var USER_URL = " http://localhost:3000/todos/"
 var datas = [];
function getUsersLocalHostData(){
return new Promise ((done)=>{
    var fillText = new XMLHttpRequest();
    fillText.open("GET" , USER_URL)
    fillText.send();
    fillText.onreadystatechange = function (data){
        if(fillText.readyState == 4 && fillText.status == 200){
            var cloudData = fillText.response ;
            console.log(cloudData);
             datas = JSON.parse(cloudData);
            console.log(datas);
            done();
            
          
        }
    }
   
})
   

 }
 getUsersLocalHostData().then(()=>{
    displayElements();
 })