var data = JSON.parse(localStorage.getItem("localData"));
function getData(){
   if (!data){
    var fillText = new XMLHttpRequest();
    fillText.open ("GET" , "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true");
    fillText.send();
    fillText.onreadystatechange = function(){
       if(fillText.readyState == 4 && fillText.status == 200){
        var cloudData = fillText.response;
            console.log(fillText.response);
           
            var data = JSON.parse(cloudData);
            console.log(data);
            displayElements(data);
            localStorage.setItem("localData" , cloudData);
        }
    }
   }else{
    displayElements(data);
   }
  
}
