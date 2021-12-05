var data=JSON.parse(localStorage.getItem("filltext1"))
function getData(){
if(!data){
    var getInfo=new XMLHttpRequest()
    getInfo.onreadystatechange=function(){
        if(getInfo.status==200&&getInfo.readyState==4){
            var filltext1=getInfo.response
            localStorage.setItem("filltext1",filltext1)
            data=JSON.parse(localStorage.getItem("filltext1"))
        }
    }
    getInfo.open("GET","http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true");
    getInfo.send()
    displayUsers()
}
else{
    displayUsers()
}
}