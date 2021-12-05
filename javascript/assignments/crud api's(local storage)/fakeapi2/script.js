var data=JSON.parse(localStorage.getItem("fakeapi2"))
function getData(){
if(!data){
    var getInfo=new XMLHttpRequest()
    getInfo.onreadystatechange=function(){
        if(getInfo.status==200&&getInfo.readyState==4){
            var fakeapi2=getInfo.response
            localStorage.setItem("fakeapi2",fakeapi2)
            data=JSON.parse(localStorage.getItem("fakeapi2"))
        }
    }
    getInfo.open("GET","https://fakestoreapi.com/carts");
    getInfo.send()
    displayUsers()
}
else{
    displayUsers()
}
}