   // get data from api of  fakeapi
   var data = JSON.parse(localStorage.getItem("cloudData"))
   function getData(){
       if(!data){
    var info = new XMLHttpRequest();
    info.open("GET" , "https://fakestoreapi.com/carts");
    info.send();
    info.onreadystatechange = function (){
        if (info.status == 200 && info.readyState == 4 ){
            
            var cloudData = info.response ;
            console.log(cloudData);
            var  data = JSON.parse(cloudData);
            console.log(data);
            displayElements(data);
             localStorage.setItem("localData",cloudData);
        }
    }
   
       
}else
{
    displayElements(data);
}
   }
