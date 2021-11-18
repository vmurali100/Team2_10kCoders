
// clear The Form


function clearForm(){
    var person = {
        fullName: "",
        userName: "",
        email: "",
        number:"",
        password:""
    }
    for (a in person){
        document.getElementById(a).value=""
    }
}