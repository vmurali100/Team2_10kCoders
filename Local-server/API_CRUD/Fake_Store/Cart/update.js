var users = [];
function upDate() {
    // index = i;
    let user = {...users[index]};
 for (a in user){
    if (a !== "products" && a !== "__v" ) {
        user[a] = document.getElementById(a).value;
      }
    }
     let UPDATE_URL = USER_URL+user.id
     var getinfo = new XMLHttpRequest ;
     getinfo.open("PUT" , UPDATE_URL );
     getinfo.setRequestHeader ("content-type" , "application/json");
     getinfo.send(JSON.stringify(user));
     getinfo.onreadystatechange = (()=>{
         if(getinfo.readyState == 4 && getinfo.status == 200){
             var users = JSON.parse( getinfo.response);
             console.log(users)
             displayElements();
         }
     });
  


}