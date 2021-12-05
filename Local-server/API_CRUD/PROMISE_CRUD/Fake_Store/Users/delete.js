function holdDelete(i) {
    console.log(all[i]);
   return new Promise ((done)=>{
    var DEL_URL =  USER_URL + all[i].id;
    var getinfo = new XMLHttpRequest();
    getinfo.onreadystatechange = function () {
      if (getinfo.readyState == 4 && getinfo.status == 200) {
        all = JSON.parse(getinfo.response);
        console.log(all);
        done();
        
      }
    };
    getinfo.open("DELETE", DEL_URL);
    getinfo.send();
   })
  }
function deleteElement(i){
  holdDelete(i).then(()=>
  {
    displayElements();
  })
}

