let API_URL = "http://localhost:3000/users/";
var allUsers = [];
function getAllUsers() {
  var getInfo = new XMLHttpRequest();
  getInfo.onreadystatechange = function () {
    if (getInfo.readyState == 4 && getInfo.status == 200) {
      allUsers = JSON.parse(getInfo.response);
      console.log(allUsers);
      displayUsers();
    }
  };
  getInfo.open("GET", API_URL);
  getInfo.send();
}

function displayUsers() {
  allUsers.forEach((user, i) => {
    var myTr = document.createElement("tr");

    for (a in user) {
      if (a !== "address" && a !== "name" && a !== "__v") {
        var myTd = document.createElement("td");
        myTd.innerHTML = user[a];
        myTr.appendChild(myTd);
      } else if (a == "address") {
        var myTd = document.createElement("td");
        myTd.innerHTML = user[a].city;
        myTr.appendChild(myTd);
      } else if (a == "name") {
        var myTd = document.createElement("td");
        myTd.innerHTML = user[a].firstname + " " + user[a].lastname;
        myTr.appendChild(myTd);
      }
    }

    // to Edit
    var EditTd = document.createElement("td");
    var editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.setAttribute("class", "btn btn-warning");
    editBtn.setAttribute("onclick", "editUser(" + i + ")");
    EditTd.appendChild(editBtn);
    myTr.appendChild(EditTd);

    // to Delete
    var deleteTd = document.createElement("td");
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.setAttribute("onclick", "deleteUser(" + i + ")");
    deleteBtn.setAttribute("class", "btn btn-danger");
    deleteTd.appendChild(deleteBtn);
    myTr.appendChild(deleteTd);

    // // to display Address
    // var myTd = document.createElement("td");
    // myTd.innerHTML = user.address.city
    // myTr.appendChild(myTd)

    // // to display Email
    // var myTd1 = document.createElement("td");
    // myTd1.innerHTML = user.email
    // myTr.appendChild(myTd1)

    document.querySelector("tbody").appendChild(myTr);
  });
}
getAllUsers();

function editUser(i) {
  index = i;
  for (a in allUsers[i]) {
    if (a !== "address" && a !== "name" && a !== "__v") {
      document.getElementById(a).value = allUsers[i][a];
    }
  }
  console.log(allUsers[i]);
}

function deleteUser(i) {
  console.log(allUsers[i]);
  var DEL_URL = API_URL + allUsers[i].id;
  var getInfo = new XMLHttpRequest();
  getInfo.onreadystatechange = function () {
    if (getInfo.readyState == 4 && getInfo.status == 200) {
      allUsers = JSON.parse(getInfo.response);
      console.log(allUsers);
      displayUsers();
    }
  };
  getInfo.open("DELETE", DEL_URL);
  getInfo.send();
}

function updateUser() {
  let user = { ...allUsers[index] };

  for (a in user) {
    if (a !== "address" && a !== "name" && a !== "__v") {
      user[a] = document.getElementById(a).value;
    }
  }
let UPDATE_URL = API_URL+user.id
  var getInfo = new XMLHttpRequest();
  getInfo.onreadystatechange = function () {
    if (getInfo.readyState == 4 && getInfo.status == 200) {
      allUsers = JSON.parse(getInfo.response);
      console.log(allUsers);
      displayUsers();
    }
  };
  getInfo.open("PUT", UPDATE_URL);
  getInfo.setRequestHeader("Content-type","application/json")
  getInfo.send(JSON.stringify(user));
}
