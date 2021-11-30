var user={
    id:Number(""),
    userid : Number(""),
    date:"",
    __v:Number("")
}
function form1(){
    for(a in user){
        user[a] = document.getElementById(a).value
    }
    var data3 = JSON.parse(localStorage.getItem("data3"))
    data3.push({...user})
    localStorage.setItem("data3",JSON.stringify(data3))
    table()
}
