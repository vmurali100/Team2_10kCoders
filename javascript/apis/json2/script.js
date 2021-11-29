var data=JSON.parse(localStorage.getItem("json2"))
function getData(){
if(!data){
    var getInfo=new XMLHttpRequest()
    getInfo.onreadystatechange=function(){
        if(getInfo.status==200&&getInfo.readyState==4){
            var json2=getInfo.response
            localStorage.setItem("json2",json2)
            data=JSON.parse(localStorage.getItem("json2"))
        }
    }
    getInfo.open("GET","https://jsonplaceholder.typicode.com/comments");
    getInfo.send()
    displayUsers()
}
else{
    displayUsers()
}
}