var data = [];
var api_url = "http://localhost:3000/users/";
function getData()
{
    document.getElementById("getData").style.display = "none";
    return new Promise((sucess)=>{
        var getInfo = new XMLHttpRequest();
        getInfo.open("GET",api_url)
        getInfo.send();
        getInfo.onreadystatechange = function(){
            if(getInfo.status == 200 && getInfo.readyState == 4)
            {
                data = JSON.parse(getInfo.response);
                display(data);   
            }
        }
    })
}

getData.then(()=>{
    display(data)
})
