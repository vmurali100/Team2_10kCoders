var datas = []
function deleteElement(i){
  index = i ;
   var DELETE_URL = USER_URL + all[index].id ;
   var fillText = new XMLHttpRequest();
   if(fillText.status == 200 && fillText.readyState == 4){
      datas = fillText.response
    displayElements(datas);
   }

   fillText.open ("DELETE" ,DELETE_URL );
   fillText.send();
  
   document.getElementById("table_row").style.display = "block";
}
