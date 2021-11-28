var index ;
function edituser(i){
    index = i;
    document.getElementById("form_row");
    document.getElementById("table_row");
    console.log("ivalue is",i);
    for(a in user)
    {
        document.getElementById(a).value = users[i][a];
    }
    
}