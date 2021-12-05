var data=JSON.parse(localStorage.getItem("json6"))
function getData(){
if(!data){
    var getInfo=new XMLHttpRequest()
    getInfo.onreadystatechange=function(){
        if(getInfo.status==200&&getInfo.readyState==4){
            var json6=getInfo.response
            localStorage.setItem("json6",json6)
            data=JSON.parse(localStorage.getItem("json6"))
        }
    }
    getInfo.open("GET","https://jsonplaceholder.typicode.com/users");
    getInfo.send()
    displayUsers()
}
else{
    displayUsers()
}
}