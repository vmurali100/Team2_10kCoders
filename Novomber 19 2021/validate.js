function validate(){
    formvalidation = true;
    for(a in person){
        var userInput = document.getElementById(a).value
        if(userInput.length==0){
            formvalidation=false
        }
    }
    if(formvalidation){
        document.querySelector("button").removeAttribute("disabled")
    }
    else{
        document.querySelector("button").setAttribute("disabled",true)
    }
    }