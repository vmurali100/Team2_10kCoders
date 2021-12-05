async  function upDate() {
    var user = {...users[index]};
    for (a in user) {
        user[a] = document.getElementById(a).value;
    }
  
    
    // document.getElementById("update").style.display = "none" ;
    // document.getElementById("table_row").style.display = "block";
// document.getElementById("form_row").style.display = "none" ;
let hero = await  handleUpdate(user);
displayElements();
}

function handleUpdate(user){
    // var user = {...users[index]};
    return new Promise ((done)=>{
        let UPDATE_URL = USER_URL + user.id ;
        var getinfo = new XMLHttpRequest ;
        getinfo.onreadystatechange = (()=>{
            users[index] = {...user}
            if(getinfo.readyState == 4 && getinfo.status == 200){
                done(JSON.parse( getinfo.response))
                
            }
        });
        getinfo.open("PUT" , UPDATE_URL );
        getinfo.setRequestHeader ("content-type" , "application/json");
        getinfo.send(JSON.stringify(user));
    })
    
}