var index;
function editElement(i){
    index = i;
    for (a in users[i]){
    document.getElementById(a).value = users[i][a]
    }
    document.getElementById("submit").style.display = "none";
    document.getElementById("update").style.display = "block";
    document.getElementById("form_row").style.display = "block";
    
}