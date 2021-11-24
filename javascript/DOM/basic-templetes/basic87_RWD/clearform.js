function clearForm(){
    var  employee  = {
        email :"" ,
        firstName: "",
        userName : "" ,
    }
    
   for ( a in employee){
   document.getElementById(a).value = ""
    // document.getElementById("firstName").value = ""
    // document.getElementById("userName").value = ""
}
}