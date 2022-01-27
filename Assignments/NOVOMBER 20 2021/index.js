var person={
    fname:"",
    lname:"",
    email:"" 
}
var persons = JSON.parse(localStorage.getItem('persons'))

if(persons==null){
    var persons = []
}
function storing(event){
    event.preventDefault()
    for(a in person){
        person[a] = document.getElementById(a).value
    }
    persons.push({...person})
    var convertedpersons = JSON.stringify(persons)
    localStorage.setItem("persons",convertedpersons)
    console.log(person)
    console.log(persons)
    clear()
    table()
    console.log("iam executing")
    
}
