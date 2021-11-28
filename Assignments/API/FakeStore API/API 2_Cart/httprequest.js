function getData()
{
    document.getElementById("getData");

    var getInfo = new XMLHttpRequest();
    getInfo.open("GET","https://fakestoreapi.com/carts")
    getInfo.send();
    getInfo.onreadystatechange = function(){
        if(getInfo.status == 200 && getInfo.readyState == 4)
        {
            var data = JSON.parse(getInfo.response);
            display(data);    
        }
    }
}