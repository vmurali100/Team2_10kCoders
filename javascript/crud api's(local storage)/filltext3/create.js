var person={
    id:"",
    email:"",
    username:"",
    password:""
    
}
var filltext3=JSON.parse(localStorage.getItem("filltext3"));
function create(){
    for(a in person){
        person[a]=document.getElementById(a).value
    }
    filltext3.push({...person})
    localStorage.setItem("filltext3",JSON.stringify(filltext3))
    displayUsers()
}