function updateUser(){
    for(a in user)
    {
       if(a !== "rating")
       {
        user[a] = document.getElementById(a).value;
       }
        else if (a == "rating") 
        {
            for(b in user[a])
            {
                user[a][b] = document.getElementById(b).value;
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