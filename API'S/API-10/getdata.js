var data = JSON.parse(localStorage.getItem("data9"))
function getData() {
   if(!data){
    var getInfo = new XMLHttpRequest()
    getInfo.onreadystatechange = function () {
        if (getInfo.status == 200 && getInfo.readyState == 4) {
            var data9 = getInfo.response
            console.log(typeof(data9))
            localStorage.setItem("data9",data9)
            data = JSON.parse(localStorage.getItem("data9"))
            table()
        }
    }
    getInfo.open("GET", "https://jsonplaceholder.typicode.com/comments")
    getInfo.send()
    
   }
   else{
      table()
   }
}
getData()