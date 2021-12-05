function updateUser(){
    for (a in person){
        person[a]=document.getElementById(a).value
    }

document.getElementById("update").style.display="none"
document.getElementById("submit").style.display="block"
fakeapi2=JSON.parse(localStorage.getItem("fakeapi2"))
fakeapi2[index]=({...person})
localStorage.setItem("fakeapi2",JSON.stringify(fakeapi2))
clear()
displayUsers()
}