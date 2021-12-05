var data=JSON.parse(localStorage.getItem("filltext2"))
function getData(){
if(!data){
    var getInfo=new XMLHttpRequest()
    getInfo.onreadystatechange=function(){
        if(getInfo.status==200&&getInfo.readyState==4){
            var filltext2=getInfo.response
            localStorage.setItem("filltext2",filltext2)
            data=JSON.parse(localStorage.getItem("filltext2"))
        }
    }
    getInfo.open("GET","http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true");
    getInfo.send()
    displayUsers()
}
else{
    displayUsers()
}
}