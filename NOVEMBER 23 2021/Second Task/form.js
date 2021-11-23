var user ={
    address:"",
    ID:Number(undefined),
    email:"",
    username:"",
    password:"",
    name: "",
    phone:"",
    __v:""
}
function form1(){
    for(a in user){
        document.getElementById(a).value = user[a]
    }
    users.push({...user})
    console.log("Here in FORM",data)
    
}