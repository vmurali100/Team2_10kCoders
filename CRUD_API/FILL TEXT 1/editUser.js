// function edit user
function editUser(i){
    document.getElementById("form1").style.display="flex";
    document.getElementById("table").style.display="none";
    index = i ;
    for(a in allData[i]){
        document.getElementById(a).value = allData[i][a];  
    }
    console.log(allData[i]);
}