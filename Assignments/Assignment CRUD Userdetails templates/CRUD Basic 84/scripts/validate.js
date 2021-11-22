function validate() 
{
  var formvalid = true;
  for (a in user) 
  {
    let userinput = document.getElementById(a).value;
    if (a !== "email") {
      if (userinput.length == 0) {
        formvalid = false;
      } 
    }
    else{
      var emailPattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailPattern.test(userinput))
      {
        formvalid = false;
      }
      
    }
  }

  if (formvalid) {
    document.getElementById("submit").removeAttribute("disabled");
  } else {
    document.getElementById("submit").setAttribute("disabled", true);
  }
}