function updateUser()
{
    user = {...users[index]};
    for(a in user)
    {
        user[a] = document.getElementById(a).value;
    }
    var update_url = api_url+user.id;
    console.log(update_url);
    var getInfo = new XMLHttpRequest();
    getInfo.open("PUT",update_url)
    getInfo.setRequestHeader("Content-Type","application/json");
    getInfo.send(JSON.stringify(user));
    getInfo.onreadystatechange = function(){
        if(getInfo.status == 200 && getInfo.readyState == 4)
        {
            var data = JSON.parse(getInfo.response);  
            console.log(data);
            // display(user);
        }
    }  

    document.getElementById("form_row").style.display = "none";
    document.getElementById("table_row").style.display = "flex";
}