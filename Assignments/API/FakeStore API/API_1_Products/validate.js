function validate(id)
{
    var empty = false;
    var emailvalid = true;
    console.log("id value is ", id);
    for(a in user)
    {
        if(a !== "email")
        {
            
            if(document.getElementById(a).value == "")
            {
                empty = true;
            }
        }
        else{
            var emailPattern =
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!emailPattern.test(document.getElementById(a).value))
            {
              emailvalid = false;
            }
            
          }

    }
    if(document.getElementById(id).value == "" || empty == true || emailvalid == false)
        {
            console.log("yes both are empty...");
            document.getElementById("update").setAttribute("disabled", true);
        }
        else{
            document.getElementById("update").removeAttribute("disabled");
        }
    
}