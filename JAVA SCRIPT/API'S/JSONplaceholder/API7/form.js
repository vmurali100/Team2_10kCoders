var user = {
    userId:Number(""),
    id:Number(""),
    title:"",
    body:""
}
function form1(){
    for(a in user){
        user[a] = document.getElementById(a).value
    }
    data7 = JSON.parse(localStorage.getItem("data7"))
    data7.push({...user})
    localStorage.setItem("data7",JSON.stringify(data7))
    table()
}