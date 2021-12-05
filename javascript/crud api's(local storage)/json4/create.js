var person={
    userId:"",
    id:"",
    title:"",
    completed:""
    
}
var json4=JSON.parse(localStorage.getItem("json4"));
function create(){
    for(a in person){
        person[a]=document.getElementById(a).value
    }
    json4.push({...person})
    localStorage.setItem("json4",JSON.stringify(json4))
    displayUsers()
}