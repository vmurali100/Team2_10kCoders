var API_URl ="http://localhost:3000/user1/"
var allUsers = []
function getData(){
    var getInfo = new XMLHttpRequest()
getInfo.onreadystatechange = function(){
    if(getInfo.status==200 && getInfo.readyState == 4){
        allUsers = JSON.parse(getInfo.response)
        console.log(allUsers)
        table()
    }
}
getInfo.open("GET",API_URl)
getInfo.send()
}
getData()