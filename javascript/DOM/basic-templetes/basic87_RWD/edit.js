var index ;
function editElement(i) {
    index = i;
    console.log(all[i]);
    var employee = {
        email: "",
        firstName: "",
        userName: "",
    }
for (a in employee){
document.getElementById(a).value = all[i][a];
}
    document.getElementById("update").style.display = "block" ;
    document.getElementById("submit").style.display = "none" ;

}