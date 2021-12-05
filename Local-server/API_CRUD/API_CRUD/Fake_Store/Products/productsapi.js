let USER_URL = "http://localhost:3000/products/" ;
let users = [];
function getUsersLocalHostData(){
   var getinfo = new XMLHttpRequest(); 
        getinfo.onreadystatechange =  function (){
            if(getinfo.readyState == 4 && getinfo.status == 200){
                users = JSON.parse( getinfo.response)
                console.log(users);
                 displayElements(users);
            }
               
        }
    getinfo.open ("GET" , USER_URL);
    getinfo.send();

document.querySelector("form").style.display = "none" ;
}
   

