var user = {
    albumId:Number(""),
    id:Number(""),
    title:"",
    url:"",
    thumbnailUrl:""
}
function form1(){
    for(a in user){
        user[a] = document.getElementById(a).value
    }
    data11 = JSON.parse(localStorage.getItem("data11"))
    data11.push({...user})
    localStorage.setItem("data11",JSON.stringify(data11))
    table()
}