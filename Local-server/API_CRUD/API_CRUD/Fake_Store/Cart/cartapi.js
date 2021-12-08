var USER_URL = "http://localhost:3000/cart/";

var users = [];
function getUsersLocalHostData() {
  var getinfo = new XMLHttpRequest();
  getinfo.onreadystatechange = () => {
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
