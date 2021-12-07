var index;
function edituser(i) {
  index = i;
  for (a in user) 
  {
    if (a !== "address" && a !== "company" && a !== "id") {
      document.getElementById(a).value = users[i][a];
    }
    else if (a == "address") 
    {
      for (b in user[a]) 
      {
        if (b !== "geo") 
        {
          document.getElementById(b).value = users[i][a][b];
        }
        else 
        {
          for (c in user[a][b]) 
          {
            document.getElementById(c).value = users[i][a][b][c];

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
          document.getElementById("name2").value = users[i][a][b];
        }
        else
        {
          document.getElementById(b).value = users[i][a][b];
        }
           
      }
      }
    }
    
  document.getElementById("form_row").style.display = "flex";
  document.getElementById("table_row").style.display = "none";
  }
