function updateUser(){
    for (a in person){
        person[a]=document.getElementById(a).value
    }

document.getElementById("update").style.display="none"
document.getElementById("submit").style.display="block"
fakeapi1=JSON.parse(localStorage.getItem("fakeapi1"))
fakeapi1[index]=({...person})
localStorage.setItem("fakeapi1",JSON.stringify(fakeapi1))
clear()
displayUsers()
}