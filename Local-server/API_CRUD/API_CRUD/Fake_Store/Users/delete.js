
function deleteElement(i) {
    console.log(users[i]);
    var DEL_URL =  USER_URL + users[i].id;
    var getinfo = new XMLHttpRequest();
    getinfo.onreadystatechange = function () {
      if (getinfo.readyState == 4 && getinfo.status == 200) {
       var  deletedItem = JSON.parse(getinfo.response);
        console.log(users);
        console.log(deletedItem);
        getUsersLocalHostData();
      }
    };
    getinfo.open("DELETE", DEL_URL);
    getinfo.send();
  }
  