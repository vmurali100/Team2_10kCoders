
//Dispalying Multiple events
var users = []
var person = {
    email:"",
    password:""
}
function dontSub(event){
    event.preventDefault()
    
    for(a in person){
        person[a]=document.getElementById(a).value
    }
    users.push({...person})
    storing()
    clearForm()
    validate()
    
}