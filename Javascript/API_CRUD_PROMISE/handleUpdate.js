function hanldeUpdate(user){
    return new Promise((resolve)=>{
        let UPDATE_URL = API_URL+user.id
        var getInfo = new XMLHttpRequest();
        getInfo.onreadystatechange = function () {
          if (getInfo.readyState == 4 && getInfo.status == 200) {
            resolve()
          }
        };
        getInfo.open("PUT", UPDATE_URL);
        getInfo.setRequestHeader("Content-type","application/json")
        getInfo.send(JSON.stringify(user));
    })
  }