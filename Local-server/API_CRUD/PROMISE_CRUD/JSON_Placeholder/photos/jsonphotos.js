// var data = JSON.parse(localStorage.getItem("localData"))
var USER_URL = "http://localhost:3000/photos/";
var datas = [];
function getUsersLocalHostData() {
  return new Promise((done) => {
    var fillText = new XMLHttpRequest();

    fillText.onreadystatechange = function () {
      if (fillText.readyState == 4 && fillText.status == 200) {
        var cloudData = fillText.response;
        done();
        console.log(cloudData);
        datas = JSON.parse(cloudData);
        console.log(datas);
      
        
      }
    };
    fillText.open("GET", USER_URL);
    fillText.send();
  });
}
getUsersLocalHostData().then(()=>{
    displayElements();
})
