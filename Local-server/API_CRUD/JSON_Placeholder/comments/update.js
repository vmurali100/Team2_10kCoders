function upDate() {
    var data = {...all[index]}
    for (a in data) {
            data[a] = document.getElementById(a).value;
             }
             var UPDATE_URL = USER_URL + all[index].id ;
             var fillText = new XMLHttpRequest;



//     for (a in employee) {
//         employee[a] = document.getElementById(a).value;
//     }
//     all[index] = { ...employee };
//     displayElements(all);
//     localStorage.setItem("newall", JSON.stringify(all));
//      document.getElementById("update").style.display = "none" ;
//     document.getElementById("table_row").style.display = "block";
// document.getElementById("form_row").style.display = "none" ;
fillText.open("PUT" , UPDATE_URL);
fillText.setRequestHeader("content-type" , "application/json")
fillText.send(JSON.stringify(data));
document.getElementById("form_row").style.display = "none";
all[index] = {...data};
displayElements(all);

}