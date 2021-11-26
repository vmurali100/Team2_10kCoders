var user = {
    fname:"",
    lname:"",
    telephone:"",
    address:"",
    city:"",
    state:"",
    zip:""
}
function form1(){
    for(a in user){
        user[a] = document.getElementById(a).value
    }
    data1 = JSON.parse(localStorage.getItem("data1"))
    data1.push({...user})
    data1 = JSON.stringify(data1)
    localStorage.setItem("data1",data1)
    console.log("sdgvuv")
}
