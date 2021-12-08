let USER_URL = " http://localhost:3000/todos/";
var users = [];
function getUsersLocalHostData() {
  return new Promise((done) => {
    var fillText = new XMLHttpRequest();
    fillText.open("GET", USER_URL);
    fillText.send();
    fillText.onreadystatechange = function () {
      if (fillText.readyState == 4 && fillText.status == 200) {
       users = JSON.parse(fillText.response);
        console.log(users);
        done();
      }
    };
  });
}
async function getData (){
var hero = await getUsersLocalHostData()
  displayElements();
}
