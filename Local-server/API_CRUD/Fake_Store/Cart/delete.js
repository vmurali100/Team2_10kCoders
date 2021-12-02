function deleteElement(i) {
  console.log(users[i]);
  var DEL_URL =  USER_URL + users[i].id ;
  var getinfo = new XMLHttpRequest();
  getinfo.onreadystatechange = function () {
    if (getinfo.readyState == 4 && getinfo.status == 200) {
      users = JSON.parse(getinfo.response);
      console.log(users);
      displayElements();
    }
  };
  getinfo.open("DELETE", DEL_URL);
  getinfo.send();
}