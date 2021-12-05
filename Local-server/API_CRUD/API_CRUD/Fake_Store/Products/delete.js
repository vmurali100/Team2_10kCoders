
function deleteElement(i) {
  index = i ;
  var DEL_URL =  USER_URL +users[index].id ;
    console.log(users[i]);
    
    var getinfo = new XMLHttpRequest ();
    getinfo.open("DELETE", DEL_URL);
    getinfo.send();
    getinfo.onreadystatechange = function () {
      if (getinfo.readyState == 4 && getinfo.status == 200) {
            var res = getinfo.response ;
        users = JSON.parse(res);
        console.log(users);
        displayElements(users);
      
      }
    };
   
    
  }