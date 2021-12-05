var data=JSON.parse(localStorage.getItem("json1"))
function getData(){
if(!data){
    var getInfo=new XMLHttpRequest()
    getInfo.onreadystatechange=function(){
        if(getInfo.status==200&&getInfo.readyState==4){
            var json1=getInfo.response
            localStorage.setItem("json1",json1)
            data=JSON.parse(localStorage.getItem("json1"))
        }
    }
    getInfo.open("GET","https://jsonplaceholder.typicode.com/posts");
    getInfo.send()
    displayUsers()
}
else{
    displayUsers()
}
}