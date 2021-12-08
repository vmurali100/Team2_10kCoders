function handleUpdate(user) {
  return new Promise((done) => {
    let UPDATE_URL = USER_URL + user.id;
    var getinfo = new XMLHttpRequest();
    getinfo.open("PUT", UPDATE_URL);
    getinfo.setRequestHeader("Content-Type", "application/json");
    getinfo.send(JSON.stringify(user));
    getinfo.onreadystatechange = function () {
      users[index] = { ...user };
      if (getinfo.readyState == 4 && getinfo.status == 200) {
        user = JSON.parse(getinfo.response);
        console.log(users);
        done();
      }
    };
  });
}

function upDate() {
  let user = { ...users[index] };
  for (a in user) {
    if (a !== "address" && a !== "name" && a !== "__v") {
      user[a] = document.getElementById(a).value;
    }
  }
  handleUpdate(user).then(() => {
    getUsersLocalHostData();
  });
}
