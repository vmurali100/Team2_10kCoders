var person={
    id:"",
    email:"",
    username:"",
    password:"",
    phone:""
    }
var fakeapi3=JSON.parse(localStorage.getItem("fakeapi3"));
function create(){
    for(a in person){
        person[a]=document.getElementById(a).value
    }
    fakeapi3.push({...person})
    localStorage.setItem("fakeapi3",JSON.stringify(fakeapi3))
    displayUsers()
}