var index;
function edituser(i) {
  index = i;
  document.getElementById("form_row").style.display = "flex";
  document.getElementById("table_row").style.display = "none";
  for (a in user) {
    if (a !== "address" && a !== "company" && a !== "id") {
      document.getElementById(a).value = users[i][a];
    }
    else if (a == "address") 
    {
      for (b in addressobj) 
      {
        if (b !== "geo") 
        {
          document.getElementById(b).value = users[i][a][b];
        }
        else 
        {
          for (c in locobj) 
          {
            document.getElementById(c).value = users[i][a][b][c];

          }
        }
      }
    }
    else if (a == "company") 
    {
      companyobj1 = {
        name2 : "",
        catchPhrase : "",
        bs : ""
      }
      for(b in companyobj1)
      {
        if(b == "name2")
        {
          document.getElementById(b).value = users[i][a].name;
        }
        else
        {
          document.getElementById(b).value = users[i][a][b];
        }
           
      }
      }
    }
  }
