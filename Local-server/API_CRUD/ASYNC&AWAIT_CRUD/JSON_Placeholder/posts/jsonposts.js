// var data = JSON.parse(localStorage.getItem("localData"))
var USER_URL = "http://localhost:3000/posts/";
var datas = [];
function getUsersLocalHostData() {
  return new Promise((done) => {
    var fillText = new XMLHttpRequest();
    fillText.open("GET", USER_URL);
    fillText.send();
    fillText.onreadystatechange = function () {
      if (fillText.readyState == 4 && fillText.status == 200) {
        var cloudData = fillText.response;
        console.log(cloudData);
        datas = JSON.parse(cloudData);
        console.log(datas);
        done();
      }
    };
  });
}
async function getData() {
  var hero = await getUsersLocalHostData();
  displayElements();
}
