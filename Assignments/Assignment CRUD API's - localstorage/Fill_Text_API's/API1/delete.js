function deluser(i)
{
    users.splice(i,1);
    
    localStorage.setItem("data",JSON.stringify(users));
    display(users);  
}