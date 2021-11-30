var user = {
    address:[{},{}],
    id:Number(""),
    email:"",
    username:"",
    password:"",
    name:"",
    phone:"",
    __v:""
}
function form1(){
    for(a in user){
        if(a=="address"){
            var geolocation = prompt("enter geo location")
        }
    }
}