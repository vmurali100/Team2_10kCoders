var data = JSON.parse(localStorage.getItem("localData"))
function getData(){
if(!data){
    var fillText = new XMLHttpRequest;
    fillText.open("GET" ,"https://jsonplaceholder.typicode.com/posts");
    fillText.send();
    fillText.onreadystatechange = function (){
        if(fillText.readyState == 4 && fillText.status == 200){
            var cloudData = fillText.response ;
            console.log(cloudData);
            var data = JSON.parse(cloudData);
            console.log(data);
            localStorage.setItem("localData" ,cloudData );
            displayElements(data);
        }
    }
}else{
    displayElements(data);
}
    
}