var person={
    albumId:"",
    id:"",
    title:"",
    url:"",
    thumbnailUrl:""
    
}
var json5=JSON.parse(localStorage.getItem("json5"));
function create(){
    for(a in person){
        person[a]=document.getElementById(a).value
    }
    json5.push({...person})
    localStorage.setItem("json5",JSON.stringify(json5))
    displayUsers()
}