var data=JSON.parse(localStorage.getItem("fakeapi1"))
function getData(){
if(!data){
    var getInfo=new XMLHttpRequest()
    getInfo.onreadystatechange=function(){
        if(getInfo.status==200&&getInfo.readyState==4){
            var fakeapi1=getInfo.response
            localStorage.setItem("fakeapi1",fakeapi1)
            data=JSON.parse(localStorage.getItem("fakeapi1"))
        }
    }
    getInfo.open("GET","https://fakestoreapi.com/products");
    getInfo.send()
    displayUsers()
}
else{
    displayUsers()
}
}