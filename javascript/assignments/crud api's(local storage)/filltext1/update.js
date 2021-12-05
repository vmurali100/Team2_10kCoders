function updateUser(){
    for (a in person){
        person[a]=document.getElementById(a).value
    }

document.getElementById("update").style.display="none"
document.getElementById("submit").style.display="block"
filltext1=JSON.parse(localStorage.getItem("filltext1"))
filltext1[index]=({...person})
localStorage.setItem("filltext1",JSON.stringify(filltext1))
clear()
displayUsers()
}