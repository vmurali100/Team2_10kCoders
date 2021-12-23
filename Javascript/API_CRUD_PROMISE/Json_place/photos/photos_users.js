
let API_URL = "http://localhost:3000/photos/";
var allPersons = [];
function getAllPersons () {
 return new Promise((resolve)=>{
  var getInfo = new XMLHttpRequest();
  getInfo.onreadystatechange = function () {
    if (getInfo.readyState == 4 && getInfo.status == 200) {
      allPersons  = JSON.parse(getInfo.response);

      console.log(allPersons )
      resolve()
    }
  };
  getInfo.open("GET", API_URL);
  getInfo.send()
 })
}


function displayPersons () {
    allPersons .forEach((person, i) => {
    var myTr = document.createElement("tr");

    for (a in person) {
        var myTd = document.createElement("td");
        myTd.innerHTML = person[a];
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
getAllPersons().then(()=>{
  displayPersons ();
})


function editUser(i) {
  index=i;
  for(a in allPersons [i]){
      document.getElementById(a).value = allPersons[i][a]
    
  }

  console.log(allPersons[i])
}

function handleDelete(i){
  return new Promise((resolve)=>{
    var DEL_URL = API_URL+allPersons [i].id
    var getInfo = new XMLHttpRequest();
    getInfo.onreadystatechange = function () {
      if (getInfo.readyState == 4 && getInfo.status == 200) {
        resolve()
        console.log( allPersons)
  
      }
    };
    getInfo.open("DELETE", DEL_URL);
    getInfo.send()
  })
}

function deleteUser() {
  handleDelete(i).then(()=>{
    displayPersons()

  })
  
}

function handleUpdate(person){
  return new Promise((resolve)=>{
    let UPDATE_URL = API_URL+person.id
    var getInfo = new XMLHttpRequest();
    getInfo.onreadystatechange = function () {
      if (getInfo.readyState == 4 && getInfo.status == 200) {
        resolve()
  
      }
    };
    getInfo.open("PUT", UPDATE_URL);
    getInfo.setRequestHeader("Content-type", "application/json")
    getInfo.send(JSON.stringify(person))
    console.log(person)
  })
}


function updateUser(){
    
  let person = {... allPersons[index]}

  for(a in person){
    person[a]= document.getElementById(a).value 
    
  }
  handleUpdate(person).then(()=>{
    displayPersons ()

  })
 
}

 


