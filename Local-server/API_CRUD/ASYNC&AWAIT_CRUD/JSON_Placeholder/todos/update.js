function handleUpdate(user){
    return new Promise ((done)=>{
        var UPDATE_URL = USER_URL + user.id ;
     var fillText = new XMLHttpRequest;
     fillText.open("PUT" , UPDATE_URL);
     fillText.setRequestHeader("content-type" , "application/json")
     fillText.send(JSON.stringify(user));
    fillText.onreadystatechange = function (){
        if(fillText.readyState == 4 && fillText.status == 200){
            users[index] = {...user}
            // var cloudData = fillText.response ;
            // console.log(cloudData);
            //  user = JSON.parse(cloudData);
             console.log(users);
            done()
          
        }
    }
   
    })
}

async function upDate() {
    var user = {...users[index]};
    for (a in user) {
        user[a] = document.getElementById(a).value;
    }
var hero = await  handleUpdate(user)
getData();
document.getElementById("table_row").style.display = "block";
     
}