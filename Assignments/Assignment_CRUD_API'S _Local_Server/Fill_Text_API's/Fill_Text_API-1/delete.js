function deluser(i)
{
    var delete_url = api_url+users[i].id;
    console.log(delete_url);
    var getInfo = new XMLHttpRequest();
    getInfo.open("DELETE",delete_url)
    getInfo.send();
    getInfo.onreadystatechange = function(){
        if(getInfo.status == 200 && getInfo.readyState == 4)
        {
            var data = JSON.parse(getInfo.response);  
            display(users);
        }
    }  
}
