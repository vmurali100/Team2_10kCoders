function getData()
{
    document.getElementById("getData");

    var getInfo = new XMLHttpRequest();
    getInfo.open("GET","http://www.filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true")
    getInfo.send();
    getInfo.onreadystatechange = function(){
        if(getInfo.status == 200 && getInfo.readyState == 4)
        {
            var data = JSON.parse(getInfo.response);
            display(data);    
        }
    }
}