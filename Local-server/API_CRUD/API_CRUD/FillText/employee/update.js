function upDate() {
    var user = {...users[index]};
    for (a in user) {
        user[a] = document.getElementById(a).value;
    }
    let UPDATE_URL = USER_URL + user.id ;
    var getinfo = new XMLHttpRequest ;
    getinfo.open("PUT" , UPDATE_URL );
    getinfo.setRequestHeader ("content-type" , "application/json");
    getinfo.send(JSON.stringify(user));
    getinfo.onreadystatechange = (()=>{
        users[index] = {...user}
        if(getinfo.readyState == 4 && getinfo.status == 200){
             user = JSON.parse( getinfo.response);
            console.log(users)
            displayElements();
        }
    });

    document.getElementById("update").style.display = "none" ;
    document.getElementById("table_row").style.display = "block";
// document.getElementById("form_row").style.display = "none" ;
   
}