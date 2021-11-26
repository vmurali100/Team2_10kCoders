var user = {
    id:Number(""),
    email:"",
    username:"",
    password:"",
    phone:"",
    __v:Number("")
}
function form1(){
    for(a in user){
        user[a] = document.getElementById(a).value
    }
    var data4 = JSON.parse(localStorage.getItem("data4"))
    data4.push({...user})
    localStorage.setItem("data4",JSON.stringify(data4))
    table()
}