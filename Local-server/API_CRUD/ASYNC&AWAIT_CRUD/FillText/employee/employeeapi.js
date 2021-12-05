var USER_URL = "http://localhost:3000/employee/" ;
var users = [];
function getUsersLocalHostData(){
  return new Promise ((done) => 
  {
    var getinfo = new XMLHttpRequest() ; 
    getinfo.onreadystatechange = function (){
        if(getinfo.readyState == 4 && getinfo.status == 200){
           var demousers = getinfo.response;
           users = JSON.parse(demousers);
            done();
          }
    };
    getinfo.open ("GET" , USER_URL);
    getinfo.send();
  })
}
async function getData(){
  var hero = await getUsersLocalHostData();
 displayElements();

    }
