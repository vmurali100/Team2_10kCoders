function updateUser(){
    for (a in person){
        person[a]=document.getElementById(a).value
    }

document.getElementById("update").style.display="none"
document.getElementById("submit").style.display="block"
json2=JSON.parse(localStorage.getItem("json2"))
json2[index]=({...person})
localStorage.setItem("json2",JSON.stringify(json2))
clear()
displayUsers()
}