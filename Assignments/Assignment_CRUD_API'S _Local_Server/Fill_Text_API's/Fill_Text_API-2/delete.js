function deluser(i)
{
    var del_url = api_url + users[i].id;
    var getInfo = new XMLHttpRequest();
    getInfo.onreadystatechange = function()
    {
        if(getInfo.readyState == 4 && getInfo.status == 200)
        {
            data = JSON.parse(getInfo.response);
        }
    }
    getInfo.open("DELETE",del_url);
    getInfo.send();
    // display(users);  
}