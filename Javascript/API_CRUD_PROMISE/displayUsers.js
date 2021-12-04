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

      document.querySelector("tbody").appendChild(myTr);
    });
  }

  async function deleteUser(i) {
      let respose = await handleDelete(i)
      displayUsers()
  }

  function editUser(i) {
    index = i;
    for (a in allUsers[i]) {
      if (a !== "address" && a !== "name" && a !== "__v") {
        document.getElementById(a).value = allUsers[i][a];
      }
    }
    console.log(allUsers[i]);
  }
  

  async function updateUser() {
    let user = { ...allUsers[index] };
  
    for (a in user) {
      if (a !== "address" && a !== "name" && a !== "__v") {
        user[a] = document.getElementById(a).value;
      }
    }

    let response = await hanldeUpdate(user);
    handleGetUsers()
  }