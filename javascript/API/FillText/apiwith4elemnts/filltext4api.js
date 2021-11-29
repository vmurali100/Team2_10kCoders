var data = JSON.parse(localStorage.getItem("localData"))
function getData(){
    var fillText = new XMLHttpRequest;
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
     fillText.open("GET" ,"http://www.filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true");
    fillText.send();
}