var user={
    id:Number(""),
    name:"",
    username:"",
    email:"",
    phone:"",
    website:""
}
function form1(){
    for(a in user){
        user[a] = document.getElementById(a).value
    }
    data6 = JSON.parse(localStorage.getItem("data6"))
    data6.push({...user})
    localStorage.setItem("data6",JSON.stringify(data6))
    table()
}