let API_URL = "  http://localhost:3000/posts/";
var allPosts = [];
function getAllPosts() {
 return new Promise((resolve)=>{
  var getInfo = new XMLHttpRequest();
  getInfo.onreadystatechange = function () {
    if (getInfo.readyState == 4 && getInfo.status == 200) {
      resolve(JSON.parse(getInfo.response))
     
    }
  };
  getInfo.open("GET", API_URL);
  getInfo.send()
 })
}
async function handleGetPosts(){
  allPosts =await getAllPosts()
  displayPosts()
}
handleGetPosts()


function displayPosts() {
    allPosts.forEach((post, i) => {
      var myTr = document.createElement("tr");
  
      for (a in post) {
        
          var myTd = document.createElement("td");
          myTd.innerHTML = post[a];
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
getAllPosts()

function editUser(i) {
    index=i;
    for(a in allPosts[i]){
        if(a !== "userId"){
        document.getElementById(a).value = allPosts[i][a]
        }
      
    }
  
    console.log(allPosts[i])
  }
  

  function handleDelete(i){
    return new Promise((resolve)=>{
      var DEL_URL = API_URL+allPosts[i].id
      var getInfo = new XMLHttpRequest();
      getInfo.onreadystatechange = function () {
        if (getInfo.readyState == 4 && getInfo.status == 200) {
          resolve()
        }
      };
      getInfo.open("DELETE", DEL_URL);
      getInfo.send()
    })
  }
  async function deleteUser(i) {
    let response = await handleDelete(i)
    displayPosts()
  }

  function handleUpdate(post){
    return new Promise((resolve)=>{
      let UPDATE_URL = API_URL+post.id
    var getInfo = new XMLHttpRequest();
    getInfo.onreadystatechange = function () {
      if (getInfo.readyState == 4 && getInfo.status == 200) {  
        resolve()
      }
    };
    getInfo.open("PUT", UPDATE_URL);
    getInfo.setRequestHeader("Content-type", "application/json")
    getInfo.send(JSON.stringify(post))
    console.log(post)
    })
  }

   async function updateUser(){
    let post = {...allPosts[index]}
  
    for(a in post){
        if(a !== "userId"){
        post[a]= document.getElementById(a).value 
        }
      } 
      let response = handleUpdate(post)
      displayPosts
    
  }
  