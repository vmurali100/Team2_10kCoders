
    // function clearForm(){
    //     var email = document.getElementById("email").value=""
    //     var password = document.getElementById("password").value=""
    // }
    function clearForm(){
        var personDtls ={
            email:"",
            password:""

        }
        for(a in personDtls){
            personDtls[a]= document.getElementById(a).value=""
        }
    }