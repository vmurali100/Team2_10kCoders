
function upDate() {
    var user = {...users[index]}
 for (a in user){
    if (a !== "rating" ) {
        user[a] = document.getElementById(a).value;
      }
    }
     let UPDATE_URL = USER_URL+user.id
     var getinfo = new XMLHttpRequest ;
     getinfo.onreadystatechange = (()=>{
         if(getinfo.readyState == 4 && getinfo.status == 200){
             var users = JSON.parse( getinfo.response);
             console.log(users)
             displayElements();
         }
     });
     getinfo.open("PUT" , UPDATE_URL );
     getinfo.setRequestHeader ("content-type" , "application/json");
     getinfo.send(JSON.stringify(user));
     document.getElementById("mytable").style.display = "block" ;
     document.querySelector("form").style.display = "none" ;

}