function upDate() {
    for (a in employee) {
        employee[a] = document.getElementById(a).value;
    }
    all[index] = { ...employee };
    displayElements(all);
    localStorage.setItem("newall", JSON.stringify(all));
     document.getElementById("update").style.display = "none" ;
    document.getElementById("table_row").style.display = "block";
document.getElementById("form_row").style.display = "none" ;
   
}