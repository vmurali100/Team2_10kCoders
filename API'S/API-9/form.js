var user = {
    userId:Number(""),
    id:Number(""),
    title:"",
    completed:""
}
function form1(){
    for(a in user){
        user[a] = document.getElementById(a).value
    }
    data8 = JSON.parse(localStorage.getItem("data8"))
    data8.push({...user})
    localStorage.setItem("data8",JSON.stringify(data8))
    table()
}