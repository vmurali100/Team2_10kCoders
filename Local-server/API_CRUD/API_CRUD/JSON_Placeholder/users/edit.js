var index ;
function editElement(i){
    index = i;
    
        for (a in users[i]){
            if ( a !== "company" && a !== "address"){
            document.getElementById(a).value = all[i][a]
            }
    }
    document.getElementById("table_row").style.display = "none";
    document.getElementById("update").style.display = "block";
    document.getElementById("form_row").style.display = "block";
    
}