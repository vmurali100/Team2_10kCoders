function updateUser(){
  // user = {...users[index]};
    for (a in user) 
    {
        if (a !== "address" && a !== "company" ) 
        {
            user[a] = document.getElementById(a).value;
        } 
        else if (a == "address") 
        {
          for(b in user[a])
          {
            if(b !== "geo")
            {
              user[a][b] = document.getElementById(b).value;
            }
            else{
              for(c in user[a][b])
              {
                user[a][b][c] = document.getElementById(c).value;
              }
              
            }
          }
        } 
        else if (a == "company") 
        {
          for(b in user[a])
          {
            if(b == "name")
            {
              user[a][b] = document.getElementById("name2").value;
            }
            else{
              user[a][b] = document.getElementById(b).value;
            }
            
          }
        }
      }
      var update_url = api_url + users[index].id;
      var getInfo = new XMLHttpRequest();
      getInfo.open("PUT", update_url);
      getInfo.setRequestHeader("content-type","application/json")
      getInfo.send(JSON.stringify(user));

      
    document.getElementById("form_row").style.display = "none";
    document.getElementById("table_row").style.display = "flex";
    users[index] = {...user};
    display(users);
}