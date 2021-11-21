var user = {
  fname: "",
  lname: "",
  email: "",
};
// var users = [];
var users = JSON.parse(localStorage.getItem("temp6persons"));
if(users == null)
{
  users = [];
}

function getUserDetails() 
{
  
  for (a in user) {
    user[a] = document.getElementById(a).value;
  }
  //pushing into array users
  users.push({...user});
  localStorage.setItem("persons",JSON.stringify(users));
  

  clear();
  display();
  validate();
}

