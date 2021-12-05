function deleteElement(i) {
  console.log(users[i]);
  var DEL_URL =  USER_URL + users[i].id;
  var getinfo = new XMLHttpRequest();
  getinfo.open("DELETE", DEL_URL);
  getinfo.send();
  getinfo.onreadystatechange = function () {
    if (getinfo.readyState == 4 && getinfo.status == 200) {
   var ine = getinfo.response
   console.log(ine);
  getUsersLocalHostData();
      
    }
  };
  
}