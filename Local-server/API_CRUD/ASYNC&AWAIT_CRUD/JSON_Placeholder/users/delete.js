
  function handleDelete(i){
    return new Promise((resolve)=>{
      var DEL_URL = USER_URL + users[i].id;
      var getInfo = new XMLHttpRequest();
      getInfo.onreadystatechange = function () {
        if (getInfo.readyState == 4 && getInfo.status == 200) {
          resolve()
        }
      };
      getInfo.open("DELETE", DEL_URL);
      getInfo.send();
    })
}

async function deleteElement(i) {
    var hero = await  handleDelete(i);
        getData();
      
}