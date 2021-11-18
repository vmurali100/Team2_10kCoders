function validate(){
    var formvalidation = true;
    for(a in person){
        var userInput = document.getElementById(a).value
        if(a!='email'){
            if(userInput.length==0){
                formvalidation=false;
                console.log("ttt")
            }
        }
        else{
                var emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                if(!emailPattern.test(userInput)){
                    formvalidation = false;
                }

            }
    }
    if(formvalidation){
        document.querySelector("button").removeAttribute("disabled")
    }
    else{
        document.querySelector("button").setAttribute("disabled",true)
    }
}