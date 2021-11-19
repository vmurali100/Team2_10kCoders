var person={
    fname:"",
    lname:"",
    email:""
}
//var  persons = []
var persons = JSON.parse(localStorage.getItem('persons'))
function display(event){
event.preventDefault()
for(a in person){
    person[a]=document.getElementById(a).value
}
persons.push({...person})
var convertedpersons = JSON.stringify(persons)
localStorage.setItem("persons",convertedpersons)

//Callings
table()
clear()
validate()
}
