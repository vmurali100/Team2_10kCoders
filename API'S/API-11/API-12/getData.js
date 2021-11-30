var data = JSON.parse(localStorage.getItem("datax"))
    function getData(){
    if(!data){
    var getInfo =  new XMLHttpRequest()
    getInfo.onreadystatechange = function(){
    if(getInfo.status==200 && getInfo.readyState == 4){
        var datax = getInfo.response
        localStorage.setItem("datax",datax)
        data = JSON.parse(localStorage.getItem("datax"))
    }
}
getInfo.open("GET","https://fakestoreapi.com/users")
getInfo.send()
}else{
    table()
}
}
getData()