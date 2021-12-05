var person={
    fname:"",
    lname:""
    }
var filltext1=JSON.parse(localStorage.getItem("filltext1"));
function create(){
    for(a in person){
        person[a]=document.getElementById(a).value
    }
    filltext1.push({...person})
    localStorage.setItem("filltext1",JSON.stringify(filltext1))
    displayUsers()
}