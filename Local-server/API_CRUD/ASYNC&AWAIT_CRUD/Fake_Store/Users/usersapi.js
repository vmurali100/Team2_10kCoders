var USER_URL = "http://localhost:3000/users/" ;
var users = [];
function getUsersLocalHostData(){
return new Promise ((done)=>
{
    var getinfo = new XMLHttpRequest ; 
    getinfo.open ("GET" , USER_URL);
    getinfo.send();
    getinfo.onreadystatechange = (()=>{
        if(getinfo.readyState == 4 && getinfo.status == 200){
           var demousers = getinfo.response;
            users = JSON.parse(demousers)
            console.log(users);
            done();
        }});})
}
async function gettData() {
let hero = await getUsersLocalHostData();
    displayElements();
}