var index
function editElement(i){
  index = i;
  for ( a in all[i]){
    if (a !== "address" && a !== "name" && a !== "__v") 
    {
        document.getElementById(a).value = all[i][a];
    }
    document.getElementById("submit").style.display = "none" ;
    document.getElementById("update").style.display = "block" ;
}


}