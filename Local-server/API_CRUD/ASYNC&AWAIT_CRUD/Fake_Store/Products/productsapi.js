var USER_URL = "http://localhost:3000/products/" ;
var users = [];
function getUsersLocalHostData(){
    return new Promise ((done)=>
    {
        var getinfo = new XMLHttpRequest() ; 
        getinfo.open ("GET" , USER_URL);
        getinfo.send();
        getinfo.onreadystatechange = (()=>{
            if(getinfo.readyState == 4 && getinfo.status == 200){
               var demousers = getinfo.response;
                users = JSON.parse(demousers)
                console.log(users);
                done();
                }
                })
document.querySelector("form").style.display = "none" ;
});
   
}
async function getData(){
  var hero  = await  getUsersLocalHostData();
        displayElements();
   
}