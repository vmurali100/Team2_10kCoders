function validate(){
    var  employee  = {
            email :"" ,
            firstName: "",
            userName : "" ,
        }
    console.log("just clicked");
    var formvalid = true;
    for (a in employee){
let myPerson = document.getElementById(a).value;
       if ( a !== "email"){
        if (myPerson.length == 0 ){
            formvalid =  false;
        }
       }else{
           var emailPattern =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
           if(!emailPattern.test( myPerson )){
            formvalid =  false;
           }
       }
       if (formvalid){
    document.querySelector("button").removeAttribute('disabled');
}else {
    document.querySelector("button").setAttribute('disabled', true);
} 
        }
  
}