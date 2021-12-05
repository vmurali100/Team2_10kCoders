function deleteElement(i){
   let DEL_URL = USER_URL + datas[i].zip ;
   var getinfo = new XMLHttpRequest();
   getinfo.open("DELETE" , DEL_URL);
   getinfo.send();
   getinfo.onreadystatechange = function (){
     if( getinfo.readyState == 4 && getinfo.status == 200){
      var dummy = getinfo.response ;
      console.log(dummy)
      getData();
     }
   }
   
}