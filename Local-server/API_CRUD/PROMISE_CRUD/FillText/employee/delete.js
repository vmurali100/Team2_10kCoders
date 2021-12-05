function handleDelete(i) {
  console.log(users[i]);
  return new Promise ((done)=>{
  var DEL_URL =  USER_URL + users[i].id;
  var getinfo = new XMLHttpRequest();
  getinfo.open("DELETE", DEL_URL);
  getinfo.send();
  getinfo.onreadystatechange = function () {
    if (getinfo.readyState == 4 && getinfo.status == 200) {
     var user = getinfo.response;
      console.log(user);
      done();
    }
  };
 
 })
}
function deleteElement(i){
  handleDelete(i).then(()=>{
    getData();
  })
}