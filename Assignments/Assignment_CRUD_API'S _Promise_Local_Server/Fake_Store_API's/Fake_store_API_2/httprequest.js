var data = [];
var api_url = "http://localhost:3000/carts/"
function getData()
{
    document.getElementById("getData").style.display = "none";
    return new Promise((sucess)=>
    {
        var getInfo = new XMLHttpRequest();
            getInfo.open("GET",api_url)
            getInfo.send();
            getInfo.onreadystatechange = function(){
                if(getInfo.status == 200 && getInfo.readyState == 4)
                {
                    data = JSON.parse(getInfo.response);
                    sucess();  
                }
            }
    })
    
}

getData().then(()=>{
    display(data);
})


