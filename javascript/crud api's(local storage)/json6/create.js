var person={
    id:"",
    name:"",
    username:"",
    email:"",
    phone:"",
    password:""
    
}
var json6=JSON.parse(localStorage.getItem("json6"));
function create(){
    for(a in person){
        person[a]=document.getElementById(a).value
    }
    json6.push({...person})
    localStorage.setItem("json6",JSON.stringify(json6))
    displayUsers()
}