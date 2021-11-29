function updateUser(){
    for (a in person){
        person[a]=document.getElementById(a).value
    }

document.getElementById("update").style.display="none"
document.getElementById("submit").style.display="block"
json1=JSON.parse(localStorage.getItem("json1"))
json1[index]=({...person})
localStorage.setItem("json1",JSON.stringify(json1))
clear()
displayUsers()
}