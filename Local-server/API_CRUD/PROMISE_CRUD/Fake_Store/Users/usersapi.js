var USER_URL = "http://localhost:3000/users/" ;
var all = [];
function getData(){
return new Promise ((done)=>
{
    var getinfo = new XMLHttpRequest() ; 
    getinfo.open ("GET" , USER_URL);
    getinfo.send();
    getinfo.onreadystatechange = (()=>
    {
        if(getinfo.readyState == 4 && getinfo.status == 200)
        {
           all = JSON.parse(getinfo.response);
            console.log(all);
            done();
        }
    });
   })
}
function getUsersLocalHostData() {
getData().then(()=>{
    displayElements(all);
})
}