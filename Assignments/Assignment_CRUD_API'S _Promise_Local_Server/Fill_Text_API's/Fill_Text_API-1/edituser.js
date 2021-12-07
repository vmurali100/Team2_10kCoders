var index ;
function edituser(i){
    index = i;

    document.getElementById("form_row").style.display = "flex";
    document.getElementById("table_row").style.display = "none";


    for(a in users[i])
    {
        document.getElementById(a).value = users[i][a];
    }
    
}