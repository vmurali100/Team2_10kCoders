var person={
    postId:"",
    id:"",
    name:"",
    email:"",
    body:""
    
}
var json2=JSON.parse(localStorage.getItem("json2"));
function create(){
    for(a in person){
        person[a]=document.getElementById(a).value
    }
    json2.push({...person})
    localStorage.setItem("json2",JSON.stringify(json2))
    displayUsers()
}