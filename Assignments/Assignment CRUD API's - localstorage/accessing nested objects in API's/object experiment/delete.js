function deluser(i)
{
    users.splice(i,1);
    localStorage.setItem("nest",JSON.stringify(users));
    display(users);  
}