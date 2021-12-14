 let DETAIL_URL = " http://localhost:3000/details"
var allDetails=[];
function dataFill(){
    var getDeatail = new XMLHttpRequest();
getDeatail.onreadystatechange = function(){
    if(getDeatail.status==200 && getDeatail.readyState==4){
        allDetails=JSON.parse(getDeatail.response);
        console.log("function")
        displayDetails();
    }
}
getDeatail.open("GET" , DETAIL_URL);
getDeatail.send();
}
dataFill()
