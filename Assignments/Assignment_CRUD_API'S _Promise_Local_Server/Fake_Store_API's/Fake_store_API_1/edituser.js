var index ;
function edituser(i){
    index = i;
    document.getElementById("form_row").style.display = "flex";
    document.getElementById("table_row").style.display = "none";
    for(a in user)
    {
        if(a!=="id" && a!=="rating")
        {
            document.getElementById(a).value = users[i][a];
        }
        else if (a == "rating") 
        {
            for(b in user[a])
            {
                document.getElementById(b).value = users[i][a][b];
                
            }
        }
    }
     
      
}
