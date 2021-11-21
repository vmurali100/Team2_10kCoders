var users = [];
var user = {
  fname: "",
  lname: "",
  email: "",
};
function getUserDetails() {
  
  for (a in user) {
    user[a] = document.getElementById(a).value;
  }

  //clearing the form
  for (a in user) {
    document.getElementById(a).value = "";
  }

  //pushing into array users
  users.push({...user});
  console.log(users);

  //clearing table everytime;
  document.querySelector("tbody").innerHTML = "";

  //displayin data in table
  users.forEach((user, i) => {
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    tr.appendChild(td);
    td.innerHTML = i + 1;
    for (key in user) {
      var td = document.createElement("td");
      td.innerHTML = user[key];
      tr.append(td);
    }
    document.querySelector("tbody").append(tr);
  });
  validate();
}
function validate() {
  var formvalid = true;
  for (a in user) 
  {
    let userinput = document.getElementById(a).value;
    if (a !== "email") {
      if (userinput.length == 0) {
        formvalid = false;
      } 
    }
    else{
      var emailPattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailPattern.test(userinput))
      {
        formvalid = false;
      }
      
    }
  }

  if (formvalid) {
    document.getElementById("submit").removeAttribute("disabled");
  } else {
    document.getElementById("submit").setAttribute("disabled", true);
  }
}
