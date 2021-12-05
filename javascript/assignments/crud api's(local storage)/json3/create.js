var person={
    userId:"",
    id:"",
    title:"",
    
}
var json3=JSON.parse(localStorage.getItem("json3"));
function create(){
    for(a in person){
        person[a]=document.getElementById(a).value
    }
    json3.push({...person})
    localStorage.setItem("json3",JSON.stringify(json3))
    displayUsers()
}