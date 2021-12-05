function handleUpdate(user){
    return new Promise ((done)=>{
        let UPDATE_URL = USER_URL+user.id
     var getinfo = new XMLHttpRequest ;
     getinfo.onreadystatechange = (()=>{
         if(getinfo.readyState == 4 && getinfo.status == 200){
             user = JSON.parse( getinfo.response);
             console.log(users)
             done(user)
       }
     });
     getinfo.open("PUT" , UPDATE_URL );
     getinfo.setRequestHeader ("content-type" , "application/json");
     getinfo.send(JSON.stringify(user));
     document.getElementById("mytable").style.display = "block" ;
     document.querySelector("form").style.display = "none" ;
    })
}


async function upDate() {
    var user = {...users[index]}
 for (a in user){
    if (a !== "rating" ) {
        user[a] = document.getElementById(a).value;
      }
    }
var hero = await handleUpdate(user) ;
   getData();

}
