 let FILLTEXT_URL = "http://localhost:3000/filltext/";
 var allData = []
function allUsers(){
    console.log("all users function");
    var getData = new XMLHttpRequest();
getData.onreadystatechange = function(){
    if(getData.status==200 && getData.readyState==4){
        console.log("if satement")
        allData = JSON.parse(getData.response);
        console.log(allData);
        displayAllData();
    }
}
getData.open("GET" , FILLTEXT_URL);
getData.send();
}
allUsers()


