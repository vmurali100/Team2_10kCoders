function updateUser(){
    for(a in user)
    {
        user[a] = document.getElementById(a).value;
    }
    users[index]={...user};
    // localStorage.setItem("username",JSON.stringify(users));
    document.getElementById("form_row");
    document.getElementById("table_row");
    display();
    clear(user);
}