function deluser(i) {
  //     users.splice(i,1);
  //     localStorage.setItem("data3",JSON.stringify(users));
  //     display(users);
  var del_url = api_url + users[i].id;
  var getInfo = new XMLHttpRequest();
  getInfo.open("DELETE", del_url);
  getInfo.send();
//   getInfo.onreadystatechange = function () {
//     if (getInfo.status == 200 && getInfo.readyState == 4) {
//       var data = JSON.parse(getInfo.response);
//       display(data);
//     }
//   };
}
