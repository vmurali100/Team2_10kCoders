function updateElement()
{
    // var employeeD = Object.assign({},employee);
    // var employeeD = {...employee};

    for(a in employee ){
        employee[a] = document.getElementById(a).value ;
    }
all[index] = {...employee};
displayElements();
localStorage.setItem("akhill" , JSON.stringify( all));

document.getElementById("update").style.display = "none" ;
document.getElementById("submit").style.display = "block" ;
document.getElementById("submit").setAttribute('disabled' , true);
// document.querySelector("button").setAttribute('disabled', true);
clearForm();
}