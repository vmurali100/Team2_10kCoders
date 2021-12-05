var index
function editElement(i){
  index = i;
  for ( a in user){
    if (a !== "rating" ) 
    {
        document.getElementById(a).value = data[i][a];
    }
    document.getElementById("submit").style.display = "none" ;
    document.getElementById("update").style.display = "block" ;
    document.getElementById("mytable").style.display = "none" ;
    document.querySelector("form").style.display = "block" ;
}


}