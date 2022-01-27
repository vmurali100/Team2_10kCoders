var user = {
    userId:Number(""),
    id:Number(""),
    title:""
}
function form1(){
    for(a in user){
        user[a] = document.getElementById(a).value
    }
    data10 = JSON.parse(localStorage.getItem("data10"))
    data10.push({...user})
    localStorage.setItem("data10",JSON.stringify(data10))
    table()
}