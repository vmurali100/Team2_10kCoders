var index
function editElement(i){
  index = i;
  for ( a in users[i]){
    if (a !== "products" && a !== "__v") 
    {
        document.getElementById(a).value = users[i][a];
    }
    document.getElementById("submit").style.display = "none" ;
    document.getElementById("update").style.display = "block" ;
}


}