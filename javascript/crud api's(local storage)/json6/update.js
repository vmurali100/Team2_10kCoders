function updateUser(){
    for (a in person){
        person[a]=document.getElementById(a).value
    }

document.getElementById("update").style.display="none"
document.getElementById("submit").style.display="block"
json6=JSON.parse(localStorage.getItem("json6"))
json6[index]=({...person})
localStorage.setItem("json6",JSON.stringify(json6))
clear()
displayUsers()
}