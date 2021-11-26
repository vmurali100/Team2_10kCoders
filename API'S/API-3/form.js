var user={
    id:Number(""),
    email:"",
    username:"",
    password:"",
}
function form1(){
    for(a in user){
        user[a] = document.getElementById(a).value
        }
        var data2 = JSON.parse(localStorage.getItem("data2"))
        data2.push({...user})
        data2 = localStorage.setItem("data2",JSON.stringify(data2))
        table()
}