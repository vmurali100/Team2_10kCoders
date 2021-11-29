var data=JSON.parse(localStorage.getItem("fakeapi3"))
function getData(){
if(!data){
    var getInfo=new XMLHttpRequest()
    getInfo.onreadystatechange=function(){
        if(getInfo.status==200&&getInfo.readyState==4){
            var fakeapi3=getInfo.response
            localStorage.setItem("fakeapi3",fakeapi3)
            data=JSON.parse(localStorage.getItem("fakeapi3"))
        }
    }
    getInfo.open("GET","https://fakestoreapi.com/users");
    getInfo.send()
    displayUsers()
}
else{
    displayUsers()
}
}