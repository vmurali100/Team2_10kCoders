function clear(){
    var person={
        fname:"",
        lname:"",
        email:""
    }
    for(a in person){
        document.getElementById(a).value=" "
    }
    console.log("Is table Executing")
}