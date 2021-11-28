var index ;
function edituser(i){
    index = i;
    document.getElementById("form_row").style.display = "flex";
    document.getElementById("table_row").style.display = "flex";
    console.log("ivalue is",i);
    for(a in user)
    {
        document.getElementById(a).value = users[i][a];
    }
    
}