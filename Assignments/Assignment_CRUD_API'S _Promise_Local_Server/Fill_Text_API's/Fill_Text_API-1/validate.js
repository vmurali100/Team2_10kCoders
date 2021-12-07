function validate(id)
{
    user = {
    fname : "",
    lname : ""
}
    var empty = false;
    console.log("id value is ", id);
    for(a in user)
    {
        if(document.getElementById(a).value == "")
        {
            empty = true;
        }

    }
    if(document.getElementById(id).value == "" || empty == true)
        {
            console.log("yes both are empty...");
            document.getElementById("update").setAttribute("disabled", true);
        }
        else{
            document.getElementById("update").removeAttribute("disabled");
        }
    
}