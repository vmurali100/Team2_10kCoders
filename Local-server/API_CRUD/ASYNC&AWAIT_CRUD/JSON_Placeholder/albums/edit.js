var index ;
function editElement(i){
    index = i;
    for (a in all[index]){
    document.getElementById(a).value = all[index][a];
    }
    document.getElementById("table_row").style.display = "none";
    document.getElementById("update").style.display = "block";
    document.getElementById("update").removeAttribute("disabled");
    document.getElementById("form_row").style.display = "block";
    
}