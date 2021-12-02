// function edit user
function editUser(i){
    index = i ;
    for(a in allData[i]){
        document.getElementById(a).value = allData[i][a];  
    }
    console.log(allData[i]);
}