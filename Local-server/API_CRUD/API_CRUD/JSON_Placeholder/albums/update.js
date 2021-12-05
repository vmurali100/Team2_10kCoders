function upDate() {
var UPDATE_URL = USER_URL + all[index].id ;
var data = {...all[index]};
for (a in data) {
    data[a] = document.getElementById(a).value;
     }
var fillText = new XMLHttpRequest();
if(fillText.status ==200 && fillText.readyState == 4){
    all = JSON.parse(fillText.response)
    displayElements(all);
    console.log(all)
}
fillText.open("PUT" ,UPDATE_URL);
fillText.send(JSON.stringify(data));
fillText.setRequestHeader("Content-Type" ,"application/json");
 all[index] = {...data};
 console.log(all)
 displayElements(all);
 document.getElementById("table_row").style.display = "block";
 document.getElementById("form_row").style.display = "none";
}
//     for (a in employee) {
//         employee[a] = document.getElementById(a).value;
//     }
//     all[index] = { ...employee };
//     displayElements(all);
//     localStorage.setItem("newall", JSON.stringify(all));
//     // document.getElementById("update").style.display = "none" ;
//     document.getElementById("table_row").style.display = "block";
// document.getElementById("form_row").style.display = "none" ;
   
