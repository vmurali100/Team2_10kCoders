
function upDate() {
    var user = {...users[index]}
 for (a in user){
    if (a !== "rating" ) {
        user[a] = document.getElementById(a).value;
      }
    }
     let UPDATE_URL = USER_URL+user.id
     var getinfo = new XMLHttpRequest ;
     getinfo.open("PUT" , UPDATE_URL );
     getinfo.setRequestHeader ("Content-Type" , "application/json");
     getinfo.send(JSON.stringify(user));
     getinfo.onreadystatechange = function (){
        //  var users =[];
        users[index] = {...user}
         if(getinfo.readyState == 4 && getinfo.status == 200){
             user = JSON.parse(getinfo.response);
             console.log(users);
             displayElements(users);
            
            
         }
     };
    
     document.getElementById("mytable").style.display = "block" ;
     document.querySelector("form").style.display = "none" ;
    
     
}