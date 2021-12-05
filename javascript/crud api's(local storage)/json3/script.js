var data=JSON.parse(localStorage.getItem("json3"))
function getData(){
if(!data){
    var getInfo=new XMLHttpRequest()
    getInfo.onreadystatechange=function(){
        if(getInfo.status==200&&getInfo.readyState==4){
            var json3=getInfo.response
            localStorage.setItem("json3",json3)
            data=JSON.parse(localStorage.getItem("json3"))
        }
    }
    getInfo.open("GET","https://jsonplaceholder.typicode.com/albums");
    getInfo.send()
    displayUsers()
}
else{
    displayUsers()
}
}