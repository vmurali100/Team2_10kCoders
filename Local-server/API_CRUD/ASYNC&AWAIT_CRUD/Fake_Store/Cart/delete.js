function handleDelete(i) {
  console.log(users[i]);
  return new Promise((done)=>{
    var DEL_URL =  USER_URL + users[i].id ;
  var getinfo = new XMLHttpRequest();
  getinfo.onreadystatechange = function () {
    if (getinfo.readyState == 4 && getinfo.status == 200) {
      user = JSON.parse(getinfo.response);
      console.log(users);
      done()
    }
  };
  getinfo.open("DELETE", DEL_URL);
  getinfo.send();
  })
}
async function deleteElement(i){
  var hero = await  handleDelete(i);
  getData();
}