var person={
    userId:"",
    id:"",
    title:"",
    body:""
    
}
var json1=JSON.parse(localStorage.getItem("json1"));
function create(){
    for(a in person){
        person[a]=document.getElementById(a).value
    }
    json1.push({...person})
    localStorage.setItem("json1",JSON.stringify(json1))
    displayUsers()
}