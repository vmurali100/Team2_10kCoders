function deluser(i)
{
    users.splice(i,1);
    localStorage.setItem("data4",JSON.stringify(users));
    display(users);  
}