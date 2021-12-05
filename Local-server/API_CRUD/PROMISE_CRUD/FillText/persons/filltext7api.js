var USER_URL = "http://localhost:3000/person/"
var datas = [];
function getData(){
   return new Promise((done)=>{
    var fillText = new XMLHttpRequest();
    fillText.onreadystatechange = function (){
        if(fillText.readyState == 4 && fillText.status == 200){
            var cloudData = fillText.response ;
            console.log(cloudData);
             datas = JSON.parse(cloudData);
            console.log(datas);
            done();
        }
    }
     fillText.open("GET", USER_URL);
    fillText.send();
   })
}
getData().then(()=>{
    displayElements();
})