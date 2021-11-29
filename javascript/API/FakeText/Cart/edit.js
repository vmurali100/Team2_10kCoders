var index;
function editElement(i){
    index = i;
    for(a in employee ){
        document.getElementById(a).value = all[i][a];
        // console.log(getinfo[i])
        
    }
    // displayElements(getinfo[i]);
    document.getElementById("submit").style.display = "none";
    document.getElementById("update").style.display = "block";

}