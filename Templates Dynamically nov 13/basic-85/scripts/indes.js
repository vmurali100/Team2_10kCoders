//Header
var h1 = document.createElement("h1")
h1.innerText = "Basic 85"
document.getElementById("hgroup").appendChild(h1)

var h2 = document.createElement("h2")
h2.innerText = "Free HTML5 Website Template"
document.getElementById("hgroup").appendChild(h2)

for (i = 0; i < 5; i++) {
    var li = document.createElement("li")
    document.getElementById("navul").appendChild(li)
    li.setAttribute("class", "lis")
    if (i == 0) {
        var a = document.createElement("a")
        a.innerText = "Home"
        document.getElementsByClassName("lis")[i].appendChild(a)
        continue
    }
    if (i == 4) {
        var a = document.createElement("a")
        a.innerText = "USERSDATA"
        document.getElementsByClassName("lis")[i].appendChild(a)
        a.setAttribute("href", "./users.html")
        continue
    }
    var a = document.createElement("a")
    a.innerHTML = "Text Link"
    document.getElementsByClassName("lis")[i].appendChild(a)
}
console.log(navul)
var p1 = document.createElement("p")
p1.innerText = "Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed. Facilispede estibulum nulla orna nisl velit elit ac aliquat non tincidunt. Namjusto cras urna urnaretra lor urna neque sed quis orci nulla laoremut vitae doloreet condimentumst"
document.getElementById("shout").appendChild(p1)


var article = document.createElement("article")
document.getElementById("latest").appendChild(article)
var figure = document.createElement("figure")
document.querySelector("article").appendChild(figure)
var ul1 = document.createElement("ul")
ul1.setAttribute("id","lis1")
document.querySelector("figure").appendChild(ul1)
for (i = 0; i<4; i++) {
    var li = document.createElement("li")
    document.getElementById("lis1").appendChild(li)
    li.setAttribute("class", "one_quarter")

    var img = document.createElement("img")
    document.getElementsByClassName("one_quarter")[i].appendChild(img)
    img.setAttribute("src", "./images/demo/img1.gif")
    img.style.paddingBottom = "20px"

}
console.log(article)
services.style.paddingTop="0px"
for(i=0;i<8;i++){
    var article = document.createElement("article")
    article.setAttribute("class","one_quarter")
    document.getElementById("services").appendChild(article)

    var figure1 = document.createElement("figure")
    document.getElementsByClassName("one_quarter")[i].appendChild(figure1)
    figure1.setAttribute("class","imgs1")
    figure1.style.width="40px"
    figure1.style.marginRight="0px"
    
    var strong = document.createElement("strong")
    strong.innerText="Lorum ipsum dolor"
    document.getElementsByClassName("one_quarter")[i].appendChild(strong)

    var p1 = document.createElement("p")
    p1.innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper."
    document.getElementsByClassName("one_quarter")[i].appendChild(p1)

    var p2 = document.createElement("p")
    p2.innerText = "ReadMore>>>"
    document.getElementsByClassName("one_quarter")[i].appendChild(p2)
    p2.style.float = "right"
    p2.style.color = "orange"

    var img = document.createElement("img")
    img.setAttribute("src","./images/demo/img2.gif")
    document.getElementsByClassName("imgs1")[i].appendChild(img)
}

var p3 = document.createElement("p")
p3.innerText = "Copyright &copy; 2018 - All Rights Reserved -Domain Name"
document.getElementById("footer").appendChild(p3)
var p4 = document.createElement("p")
p4.innerText = "webDesigner-Teja"
document.getElementById("footer").appendChild(p4)
p4.style.fontWeight="bold"
p4.style.fontSize="20px"
p4.style.color="pink"
p4.style.float = "right"