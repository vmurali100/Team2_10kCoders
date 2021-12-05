function handleUpdate(user) {
 return new Promise ((solve)=>{

       let UPDATE_URL = USER_URL + user.id ;
        var getinfo = new XMLHttpRequest() ;
       getinfo.onreadystatechange = function (){
             users[index] = {...user}
            if(getinfo.readyState == 4 && getinfo.status == 200){
              solve();
            }
        };
        getinfo.open("PUT" , UPDATE_URL );
        getinfo.setRequestHeader ("content-type" , "application/json");
        getinfo.send(JSON.stringify(user));
    })

   
   
 
// document.getElementById("form_row").style.display = "none" ;
   
}
function upDate(){
let user = {...users[index]};
for (a in user) {
    user[a] = document.getElementById(a).value;
}
handleUpdate(user).then(()=>{
    getData();
})
document.getElementById("update").style.display = "none" ;
document.getElementById("table_row").style.display = "block";

} 