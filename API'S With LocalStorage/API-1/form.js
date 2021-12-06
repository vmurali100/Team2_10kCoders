var user={
    fname:"",
    lname:""
}
function form1(){
    for(a in user){
        user[a] = document.getElementById(a).value
    }
    
    data.push({...user})
    console.log(data)
    localStorage.setItem("data1",JSON.stringify(data))
}