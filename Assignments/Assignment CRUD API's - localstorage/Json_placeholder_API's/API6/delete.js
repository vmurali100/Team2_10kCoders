function deluser(i)
{
    users.splice(i,1);
    localStorage.setItem("data9",JSON.stringify(users));
    display(users);  
}