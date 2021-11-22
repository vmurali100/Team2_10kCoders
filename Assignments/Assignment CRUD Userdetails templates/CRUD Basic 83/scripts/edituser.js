var index;
function edituser(i){
    index = i;
    for( a in user){
        document.getElementById(a).value = users[i][a];
    }

    document.getElementById("update").style.display = "block";
    document.getElementById("submit").style.display = "none";
    
    
}