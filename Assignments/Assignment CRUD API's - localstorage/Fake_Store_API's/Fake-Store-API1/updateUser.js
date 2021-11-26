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
    users[index]={...user};
    localStorage.setItem("data10",JSON.stringify(users));
    document.getElementById("form_row").style.display = "none";
    document.getElementById("table_row").style.display = "flex";
    display(users);
}