let API_URL = "http://localhost:3000/users/";
var allUsers = [];
function getAllUsers() {
  return new Promise((success)=>{
    var getInfo = new XMLHttpRequest();
    getInfo.onreadystatechange = function () {
      if (getInfo.readyState == 4 && getInfo.status == 200) {
        success(JSON.parse(getInfo.response))
      }
    };
    getInfo.open("GET", API_URL);
    getInfo.send();
  })
}


async function handleGetUsers(){
    allUsers = await getAllUsers();
    displayUsers()

    
    // getAllUsers().then(()=>{
    //     displayUsers()
    // })
}

handleGetUsers()