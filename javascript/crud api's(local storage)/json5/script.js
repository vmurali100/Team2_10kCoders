var data=JSON.parse(localStorage.getItem("json5"))
function getData(){
if(!data){
    var getInfo=new XMLHttpRequest()
    getInfo.onreadystatechange=function(){
        if(getInfo.status==200&&getInfo.readyState==4){
            var json5=getInfo.response
            localStorage.setItem("json5",json5)
            data=JSON.parse(localStorage.getItem("json5"))
        }
    }
    getInfo.open("GET","https://jsonplaceholder.typicode.com/photos");
    getInfo.send()
    displayUsers()
}
else{
    displayUsers()
}
}