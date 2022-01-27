var data = JSON.parse(localStorage.getItem("data1"))
function getData() {
   if(!data){
    var getInfo = new XMLHttpRequest()
    getInfo.onreadystatechange = function () {
        if (getInfo.status == 200 && getInfo.readyState == 4) {
            var data1 = getInfo.response
            localStorage.setItem("data1", data1)
            data = JSON.parse(localStorage.getItem("data1"))
            table()
        }
    }
    getInfo.open("GET", "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true")
    getInfo.send()
   }
   else{
    table()
   }
}
getData()