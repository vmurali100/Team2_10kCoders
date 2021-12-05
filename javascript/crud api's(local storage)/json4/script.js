var data=JSON.parse(localStorage.getItem("json4"))
function getData(){
if(!data){
    var getInfo=new XMLHttpRequest()
    getInfo.onreadystatechange=function(){
        if(getInfo.status==200&&getInfo.readyState==4){
            var json4=getInfo.response
            localStorage.setItem("json4",json4)
            data=JSON.parse(localStorage.getItem("json4"))
        }
    }
    getInfo.open("GET","https://jsonplaceholder.typicode.com/todos");
    getInfo.send()
    displayUsers()
}
else{
    displayUsers()
}
}