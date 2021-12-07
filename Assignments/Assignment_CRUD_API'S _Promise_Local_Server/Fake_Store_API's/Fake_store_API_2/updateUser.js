function updateUser(){
    for(a in user)
    {
        user[a] = document.getElementById(a).value;
    }
    var update_url = api_url + users[index].id;
    var getInfo = new XMLHttpRequest();
    getInfo.onreadystatechange = function (){
      if(getInfo.status == 200 && getInfo.readyState == 4)
      {
        getData();
      }
    }
    getInfo.open("PUT", update_url);
    getInfo.setRequestHeader("content-type","application/json")
    getInfo.send(JSON.stringify(user));

    
  document.getElementById("form_row").style.display = "none";
  document.getElementById("table_row").style.display = "flex";
   
}