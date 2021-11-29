var index
function edit(i){
    index=i
    for(a in person){
        document.getElementById(a).value=data[i][a]
    }
    document.getElementById("update").style.display="block"
    document.getElementById("submit").style.display="none"
}