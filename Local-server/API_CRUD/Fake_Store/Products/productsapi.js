var USER_URL = "http://localhost:3000/products/" ;

// var users = JSON.parse(localStorage.getItem("localData"));
var users = [];
function getUsersLocalHostData(){
//    if(!users){
    var getinfo = new XMLHttpRequest ; 
    getinfo.onreadystatechange = ((user)=>{
        if(getinfo.readyState == 4 && getinfo.status == 200){
           var demousers = getinfo.response;
            users = JSON.parse(demousers)
            console.log(users);
            displayElements();
            localStorage.setItem("localData" , demousers )
             
        }
    });
    getinfo.open ("GET" , USER_URL);
    getinfo.send();
//    } else
//    {
//     displayElements(users);
//    }
document.querySelector("form").style.display = "none" ;
}
getUsersLocalHostData();