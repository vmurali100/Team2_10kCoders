function deluser(i)
{
    users.splice(i,1);
    localStorage.setItem("data6",JSON.stringify(users));
    display(users);  
}