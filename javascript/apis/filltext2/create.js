var person={
   fname:"",
   lname:"",
   tel:"",
   address:"",
   city:"",
   state:"",
   zip:""   
}
var filltext2=JSON.parse(localStorage.getItem("filltext2"));
function create(){
    for(a in person){
        person[a]=document.getElementById(a).value
    }
    json4.push({...person})
    localStorage.setItem("filltext2",JSON.stringify(filltext2))
    displayUsers()
}