var index ;
function edituser(i){
    index = i;
    document.getElementById("form_row").style.display = "flex";
    document.getElementById("table_row").style.display = "none";
    for(a in user)
    {
        if(a!=="name" && a!=="address")
        {
            document.getElementById(a).value = users[i][a];
        }
        else if (a == "address")
        {
            for (b in user[a]) 
            {
                if (b !== "geolocation") 
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
        else if(a == "name")
        {
            for(b in user[a])
            {
                document.getElementById(b).value = users[i][a][b];
            }
        }

    }
}
