//clear the form or input feilds
function clearForm() {

    // document.getElementById("fname").value = ""
    // document.getElementById("lname").value = ""
    // document.getElementById("email").value = ""
    var person = {
        fname: "",
        lname: "",
        email: ""

    }
    for (a in person) {
        document.getElementById(a).value = ""
    }


}