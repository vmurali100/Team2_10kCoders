var user = {
    id:Number(""),
    title:"",
    price:Number(""),
    desc:"",
    category:"",
    image:""
}
function form1(){
    for(a in user){
        user[a] = document.getElementById(a).value
    }
    var data5 = JSON.parse(localStorage.getItem("data5"))
    data5.push({...user})
    localStorage.setItem("data5",JSON.stringify(data5))
    table()
}