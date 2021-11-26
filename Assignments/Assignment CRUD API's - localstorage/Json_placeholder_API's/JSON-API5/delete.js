function deluser(i)
{
    users.splice(i,1);
    localStorage.setItem("data8",JSON.stringify(users));
    display(users);  
}