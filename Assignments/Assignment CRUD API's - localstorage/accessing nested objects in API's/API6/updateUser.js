function updateUser(){
    i = index;
    // for(a in user)
    // {
    //     user[a] = document.getElementById(a).value;
    // }

    for (a in user) 
    {
        if (a !== "address" && a !== "company" && a !== "id") 
        {
            user[a] = document.getElementById(a).value;
        } 
        // else if (a == "address") 
        // {
        //   for(b in addressobj)
        //   {
        //     if(b !== "geo")
        //     {
        //       user[a][b] = document.getElementById(b).value;
        //     }
        //     else{
        //       for(c in locobj)
        //       {
        //         user[a][b][c] = document.getElementById(c).value;
        //       }
              
        //     }
        //   }
        // } 
        else if (a == "company") 
        {
          for(b in companyobj)
          {
            user[a][b] = document.getElementById(b).value;
          }
        }
      }

    users[index]={...user};
    localStorage.setItem("data9",JSON.stringify(users));
    document.getElementById("form_row").style.display = "none";
    document.getElementById("table_row").style.display = "flex";
    display(users);
}