function deleteElement(i){
  index = i ;
   var DELETE_URL = USER_URL + all[index].id ;
   var fillText = new XMLHttpRequest();

   fillText.open ("DELETE" ,DELETE_URL );
   fillText.send();
   displayElements();
   
}
