var myArray = [];
if (!myArray) {
  myArray = JSON.parse(localStorage.getItem("localData"));
} else {
  // myArray = JSON.parse(localStorage.getItem("localData"));
}
var myObject = {
  id: null,
  task: "",
  status: "",
};

function addNew() {
  for (a in myObject) {
    myObject[a] = document.getElementById(a).value;
  }
  // creating a copy
  // var newemployee = object.assign({} ,employee )
  myArray.push({ ...myObject });
  console.log(myArray);
  var data = JSON.stringify(myArray);
  localStorage.setItem("localData", data);
  clearForm();
  window.alert(myObject.task +" is added todo list")
}

function clearForm() {
  // var myObject = {
  //   task: "",
  //   status: "",
  // };

  for (a in myObject) {
    document.getElementById(a).value = "";
  }
}




function displayTask(i) {
 
  myArray[i];
  window.location.href = "./table.html?";
  myArray = JSON.parse(localStorage.localData);
  viewTasks()
}
