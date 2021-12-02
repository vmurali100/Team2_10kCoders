
function upDate() {
var user = {...users[index]}
    for (a in user) {
        if ( a !== "company" && a !== "address") {
        user[a] = document.getElementById(a).value;
        }
    }
    var UPDATE_URL = USER_URL + user.id;
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
    getinfo.open ("PUT" , UPDATE_URL);
    getinfo.setRequestHeader("content-type" , "application/json")
    getinfo.send(JSON.stringify(user));


    document.getElementById("table_row").style.display = "block";
    document.getElementById("form_row").style.display = "none";













//     all[index] = { ...employee };
//     displayElements(all);
//     localStorage.setItem("newall", JSON.stringify(all));
//     // document.getElementById("update").style.display = "none" ;
//     document.getElementById("table_row").style.display = "block";
// document.getElementById("form_row").style.display = "none" ;
   
}