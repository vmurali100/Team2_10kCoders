function updateUser(){
    for (a in person){
        person[a]=document.getElementById(a).value
    }

document.getElementById("update").style.display="none"
document.getElementById("submit").style.display="block"
json4=JSON.parse(localStorage.getItem("json4"))
json4[index]=({...person})
localStorage.setItem("json4",JSON.stringify(json4))
clear()
displayUsers()
}