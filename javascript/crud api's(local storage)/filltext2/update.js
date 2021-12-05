function updateUser(){
    for (a in person){
        person[a]=document.getElementById(a).value
    }

document.getElementById("update").style.display="none"
document.getElementById("submit").style.display="block"
filltext2=JSON.parse(localStorage.getItem("filltext2"))
filltext2[index]=({...person})
localStorage.setItem("filltext2",JSON.stringify(filltext2))
clear()
displayUsers()
}