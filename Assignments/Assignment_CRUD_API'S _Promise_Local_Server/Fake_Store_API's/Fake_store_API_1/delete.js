function deluser(i) 
{
  handleDelUser(i).then(()=>{
    getData();
  })
}

function handleDelUser(i){
  return new Promise((sucess)=>
  {
    var del_url = api_url + users[i].id;
    var getInfo = new XMLHttpRequest();
    getInfo.open("DELETE", del_url);
    getInfo.send();
    getInfo.onreadystatechange = function (){
      if(getInfo.status == 200 && getInfo.readyState == 4)
      {
        sucess();
      }
    }
  })
}
