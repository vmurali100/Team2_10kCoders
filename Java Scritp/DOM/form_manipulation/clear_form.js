function clearForm(){
    var person = {
        email: "",
        fullName: "",
        userName: ""
    }
    for(a in person){
        document.getElementById(a).value = ""
    }
}