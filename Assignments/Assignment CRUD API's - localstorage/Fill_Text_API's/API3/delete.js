function deluser(i)
{
    users.splice(i,1);
    localStorage.setItem("data3",JSON.stringify(users));
    display(users);
}