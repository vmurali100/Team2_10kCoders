function deluser(i) 
{
  // user = {...users[i]}
  console.log(users);
  var del_url = api_url + users[i].id;
  var getInfo = new XMLHttpRequest();
  getInfo.open("DELETE", del_url);
  getInfo.send();
  getInfo.onreadystatechange = function (){
    if(getInfo.status == 200 && getInfo.readyState == 4)
    {
      getData();
    }
  }
}
