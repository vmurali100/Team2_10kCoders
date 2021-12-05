function updateUser(){
    for(a in user)
    {
        user[a] = document.getElementById(a).value;
    }

    var update_url = api_url + users[index].id;
    var getInfo = new XMLHttpRequest();
    if(getInfo.status ==200 && getInfo.readyState == 4){
        users = JSON.parse(getInfo.response)
        display(users);
    }
    getInfo.open("PUT",update_url)
    getInfo.setRequestHeader("Content-Type","application/json");
    getInfo.send(JSON.stringify(user));
    
    document.getElementById("form_row").style.display = "none";
    document.getElementById("table_row").style.display = "block";
    document.getElementById("getData").style.display = "none";
    users[index]={...user};
    display(users);
}