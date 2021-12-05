
 async function upDate() {
    var user = {...users[index]}
 for (a in user){
    if (a !== "address" && a !== "name" && a !== "__v") {
        user[a] = document.getElementById(a).value;
      }
    }
    var hero = await handleUpdate (user) ;
      displayElements();
}
function handleUpdate (user){
    return new Promise ((done)=>{
        let UPDATE_URL = USER_URL+user.id 
        var getinfo = new XMLHttpRequest ;
        getinfo.onreadystatechange = (()=>{
            if(getinfo.readyState == 4 && getinfo.status == 200){
                users[index] = {...user}
                user = JSON.parse( getinfo.response);
                console.log(users)
                done(user);
                
            }
        });
        getinfo.open("PUT" , UPDATE_URL );
        getinfo.setRequestHeader ("content-type" , "application/json");
        getinfo.send(JSON.stringify(user))
    })
    ;
}