function updateUser(){
    for (a in person){
        person[a]=document.getElementById(a).value
    }

document.getElementById("update").style.display="none"
document.getElementById("submit").style.display="block"
fakeapi3=JSON.parse(localStorage.getItem("fakeapi3"))
fakeapi3[index]=({...person})
localStorage.setItem("fakeapi3",JSON.stringify(fakeapi3))
clear()
displayUsers()
}