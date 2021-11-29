function updateUser(){
    for (a in person){
        person[a]=document.getElementById(a).value
    }

document.getElementById("update").style.display="none"
document.getElementById("submit").style.display="block"
filltext3=JSON.parse(localStorage.getItem("filltext3"))
filltext3[index]=({...person})
localStorage.setItem("filltext3",JSON.stringify(filltext3))
clear()
displayUsers()
}