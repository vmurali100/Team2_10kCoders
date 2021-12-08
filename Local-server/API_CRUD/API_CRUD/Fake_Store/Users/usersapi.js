let USER_URL = "http://localhost:3000/users/";
var users = [];
function getUsersLocalHostData() {
  var getinfo = new XMLHttpRequest();
  getinfo.onreadystatechange = function () {
    if (getinfo.readyState == 4 && getinfo.status == 200) {
      var demousers = getinfo.response;
      users = JSON.parse(demousers);
      console.log(users);
      displayElements();
    }
  };
  getinfo.open("GET", USER_URL);
  getinfo.send();
 
}


