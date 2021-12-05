var data=JSON.parse(localStorage.getItem("filltext3"))
function getData(){
if(!data){
    var getInfo=new XMLHttpRequest()
    getInfo.onreadystatechange=function(){
        if(getInfo.status==200&&getInfo.readyState==4){
            var filltext3=getInfo.response
            localStorage.setItem("filltext3",filltext3)
            data=JSON.parse(localStorage.getItem("filltext3"))
        }
    }
    getInfo.open("GET","http://www.filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true");
    getInfo.send()
    displayUsers()
}
else{
    displayUsers()
}
}