function deleteElement(i){
  //  var DEL_URL = USER_URL + data.id ;
   var DEL_URL =  USER_URL + datas[i].id;
   var getinfo = new XMLHttpRequest();
   getinfo.onreadystatechange = function () {
     if (getinfo.readyState == 4 && getinfo.status == 200) {
       datas = JSON.parse(getinfo.response);
       console.log(datas);
       displayElements(i);
     }
   };
   getinfo.open("DELETE", DEL_URL);
   getinfo.send();
  
   
}