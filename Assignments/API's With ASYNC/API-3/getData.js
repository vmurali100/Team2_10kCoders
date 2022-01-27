var API_URL = "http://localhost:3000/user3/"
var allUsers = []
function getData(){
   return new Promise((resolve)=>{
    var getInfo = new XMLHttpRequest()
    getInfo.onreadystatechange = function(){
        if(getInfo.status==200 && getInfo.readyState == 4){
            allUsers = JSON.parse(getInfo.response)
            console.log(allUsers)
            resolve()
        }
    }
    getInfo.open("GET",API_URL)
    getInfo.send()
   })
}
getData().then(()=>{
    table()
})