getData()
var data;
data = JSON.parse(localStorage.getItem("data"))
console.log(data)
function getData(){
   if(!data){
    var getInfo = new XMLHttpRequest();
    getInfo.onreadystatechange = function(){
        if(getInfo.status == 200 && getInfo.readyState == 4){//This ready state will call the function
            data = getInfo.response
            localStorage.setItem("data",data)
            data = JSON.parse(getInfo.response)
            
        }
    }
    getInfo.open("GET","https://fakestoreapi.com/carts")
    getInfo.send()
   
   }
   else{
    table()
}
   
   
}