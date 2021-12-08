function holdDelete(i) {
  console.log(users[i]);
  return new Promise((done) => {
    var DEL_URL = USER_URL + all[i].id;
    var getinfo = new XMLHttpRequest();
    getinfo.onreadystatechange = function () {
      if (getinfo.readyState == 4 && getinfo.status == 200) {
        users = JSON.parse(getinfo.response);
        console.log(users);
        done();
      }
    };
    getinfo.open("DELETE", DEL_URL);
    getinfo.send();
  });
}
function deleteElement(i) {
  holdDelete(i).then(() => {
    getUsersLocalHostData();
  });
}
