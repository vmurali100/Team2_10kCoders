function updateUser()
{
    for (a in user)
    {
        user[a] = document.getElementById(a).value ; 
    }
    users[index] = {...user};
    localStorage.setItem("temp2persons",JSON.stringify(users));
    display();
    document.getElementById("update").style.display = "none";
    document.getElementById("submit").style.display = "block";
    clear();
}