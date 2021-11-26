function updateUser(){
    for(a in user)
    {
        user[a] = document.getElementById(a).value;
    }
    users[index]={...user};
    document.getElementById("form_row").style.display = "none";
    document.getElementById("table_row").style.display = "flex";
    display();
}