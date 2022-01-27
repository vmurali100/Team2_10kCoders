var h1 = document.createElement("h1")
h1.innerText = "Basic 83"
document.getElementById("hgroup").appendChild(h1)

var h2 = document.createElement("h2")
h2.innerText = "Free HTML5 Website Template"
document.getElementById("hgroup").appendChild(h2)

//NavBar
var ul = document.querySelector("ul")
ul.setAttribute("id","navul")
console.log(ul)

for(i=0;i<5;i++){
    var li = document.createElement("li")
    document.getElementById("navul").appendChild(li)
    li.setAttribute("class","lis")

    var a = document.createElement("a")
    if(i==0){
        a.innerText = "Home"
        document.getElementsByClassName("lis")[i].appendChild(a)
        continue
    }
    if(i==3){
        a.innerText = "Enter DetailS"
        a.setAttribute("href","./EnterDetails.html")
        document.getElementsByClassName("lis")[i].appendChild(a)
        continue
    }
    if(i==4){
        a.innerText = "Data Table"
        a.setAttribute("href","./users.html")
        document.getElementsByClassName("lis")[i].appendChild(a)
        continue
    }
    a.innerText = "TextLink"
    document.getElementsByClassName("lis")[i].appendChild(a)
}