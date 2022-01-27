var user = {
    postId:Number(""),
    id:Number(""),
    name:"",
    email:"",
    body:""
}
function form1(){
    for(a in user){
        user[a] =document.getElementById(a).value
}
data9 = JSON.parse(localStorage.getItem("data9"))
data9.push({...user})
localStorage.setItem("data9",JSON.stringify(data9))
table()
}