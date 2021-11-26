var data = JSON.parse(localStorage.getItem("data11"));
function getData()
{
    document.getElementById("getData").style.display = "none";
    if(!data || data.length == 0)
    {
        var getInfo = new XMLHttpRequest();
        getInfo.open("GET","https://fakestoreapi.com/carts")
        getInfo.send();
        getInfo.onreadystatechange = function(){
            if(getInfo.status == 200 && getInfo.readyState == 4)
            {
                var data = JSON.parse(getInfo.response);
                console.log(data);

                localStorage.setItem("data11",JSON.stringify(data))
                console.log(data);
                display(data);   
            }
        }
    }  
    else
    {
        display(data);
    }
}


