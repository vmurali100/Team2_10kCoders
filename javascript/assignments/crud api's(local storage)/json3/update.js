function updateUser(){
    for (a in person){
        person[a]=document.getElementById(a).value
    }

document.getElementById("update").style.display="none"
document.getElementById("submit").style.display="block"
json3=JSON.parse(localStorage.getItem("json3"))
json3[index]=({...person})
localStorage.setItem("json3",JSON.stringify(json3))
clear()
displayUsers()
}