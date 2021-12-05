var users = [];
function handleUpdate(user){
    return new Promise ((done)=>{
        let UPDATE_URL = USER_URL+user.id
    var getinfo = new XMLHttpRequest() ;
    getinfo.open("PUT" , UPDATE_URL );
    getinfo.setRequestHeader ("content-type" , "application/json");
    getinfo.send(JSON.stringify(user));
    getinfo.onreadystatechange = (()=>{
        if(getinfo.readyState == 4 && getinfo.status == 200){
             user = JSON.parse( getinfo.response);
            console.log(users)
            done();
         }
    }); })
}


async function upDate() {
    let user = {...users[index]};
 for (a in user){
    if (a !== "products" && a !== "__v" ) {
        user[a] = document.getElementById(a).value;
      }
    }
    var hero = await handleUpdate(user) ;
    getData();

}