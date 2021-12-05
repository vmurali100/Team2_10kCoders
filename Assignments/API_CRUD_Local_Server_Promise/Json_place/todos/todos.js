
let API_URL = "http://localhost:3000/todos/";
var allTodos = [];
function getAllTodos() {
 return new Promise((resolve)=>{
  var getInfo = new XMLHttpRequest();
  getInfo.onreadystatechange = function () {
    if (getInfo.readyState == 4 && getInfo.status == 200) {
      allTodos= JSON.parse(getInfo.response);

      console.log(allTodos)
      resolve()
    }
  };
  getInfo.open("GET", API_URL);
  getInfo.send()
 })
}
getAllTodos().then(()=>{
  displayTodos()
})

function displayTodos() {
  allTodos.forEach((todo, i) => {
    var myTr = document.createElement("tr");

    for (a in todo) {
      
        var myTd = document.createElement("td");
        myTd.innerHTML = todo[a];
        myTr.appendChild(myTd);
    

    }
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

    document.querySelector('tbody').appendChild(myTr)


  })
}
getAllTodos();

function editUser(i) {
  index=i;
  for(a in allTodos[i]){
    if(a !== "userId"){
      document.getElementById(a).value = allTodos[i][a]
    } 
  }

  console.log(allTodos[i])
}


function deleteUser(i) {
  console.log(allTodos[i])
    var DEL_URL = API_URL+allProducts[i].id
  var getInfo = new XMLHttpRequest();
  getInfo.onreadystatechange = function () {
    if (getInfo.readyState == 4 && getInfo.status == 200) {
      allTodos = JSON.parse(getInfo.response);

      console.log(allTodos)
      displayTodoss()

    }
  };
  getInfo.open("DELETE", DEL_URL);
  getInfo.send()
}

function updateUser(){
  let todo = {...allTodos[index]}

  for(a in todo){
    if(a !== "userId" ){
        todo[a]= document.getElementById(a).value 
    } 
  }
  let UPDATE_URL = API_URL+todo.id
  var getInfo = new XMLHttpRequest();
  getInfo.onreadystatechange = function () {
    if (getInfo.readyState == 4 && getInfo.status == 200) {
      allTodos = JSON.parse(getInfo.response);

      console.log(allTodos)
      displayTodos()

    }
  };
  getInfo.open("PUT", UPDATE_URL);
  getInfo.setRequestHeader("Content-type", "application/json")
  getInfo.send(JSON.stringify(todo))
  console.log(todo)
}

 



