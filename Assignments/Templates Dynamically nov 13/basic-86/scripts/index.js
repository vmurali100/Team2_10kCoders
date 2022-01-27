var h1 = document.createElement("h1")
h1.innerText = "Basic 85"
document.getElementById("hgroup").appendChild(h1)

var h2 = document.createElement("h2")
h2.innerText = "Free HTML5 Website Template"
document.getElementById("hgroup").appendChild(h2)

for(i=0;i<5;i++){
    var li = document.createElement("li")
    document.getElementById("navul").appendChild(li)
    li.setAttribute("class","lis")

    var a = document.createElement("a")
    if(i==0){
        a.innerText="Home"
        document.getElementsByClassName("lis")[i].appendChild(a)
        continue
    }
    
    if(i==4){
        a.innerText="Employee Data"
        document.getElementsByClassName("lis")[i].appendChild(a)
        a.setAttribute("href","./users.html")
        continue

    }
    
    a.innerText="Text Link"
    document.getElementsByClassName("lis")[i].appendChild(a)
}

var figure = document.createElement("figure")
document.getElementById("slider").appendChild(figure)

var img = document.createElement("img")
document.querySelector("figure").appendChild(img)
img.setAttribute("src","./images/demo/imgs1.gif")

var figcaption = document.createElement("figcaption")
document.querySelector("figure").appendChild(figcaption)

var h3 = document.createElement("h2")
h3.innerText="Eu justo augue estas"
document.querySelector("figcaption").appendChild(h3)

var p3 = document.createElement("p")
p3.innerText="Nullamlacus dui ipsum conseque loborttis non euisque morbi penas dapibulum orna. Urnaultrices quis curabitur phasellentesque congue magnis vestibulum quismodo nulla et feugiat adipiscinia pellentum leo."
document.querySelector("figcaption").appendChild(p3)

var p4 = document.createElement("p")
p4.innerText="ReadMore>>"
p4.style.float ="right"
p4.style.color = "orange"
document.querySelector("figcaption").appendChild(p4)

for(i=0;i<3;i++){
    var article = document.createElement("article")
    document.getElementById("services").appendChild(article)
    article.setAttribute("class","one_third")
}

for(i=0;i<3;i++){
    var h4 = document.createElement("h2")
    h4.innerText = "Lorum ipsum dolor"
    h4.style.margin="0px"
    h4.style.textAlign='center'
    h4.style.backgroundColor="lightgrey"
    document.getElementsByClassName("one_third")[i].appendChild(h4)

    var img = document.createElement("img")
    img.setAttribute("src","./images/demo/imgs3.gif")
    document.getElementsByClassName("one_third")[i].appendChild(img)
    
    var p = document.createElement("p")
    p.innerText="Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed. Facilispede estibulum nulla orna nisl velit elit ac aliquat non tincidunt. Namjusto cras urna urnaretra lor urna neque sed quis orci nulla. Laoremut vitae doloreet condimentumst phasellentes dolor ut a ipsum id consectetus. Inpede cumst vitae ris tellentesque fring intesquet."
    document.getElementsByClassName("one_third")[i].appendChild(p)

    var p1 = document.createElement("p")
    p1.innerText = "Read More>>"
    p1.style.float="right"
    p1.style.color="orange"
    document.getElementsByClassName("one_third")[i].appendChild(p1)
}

//F00TEr
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



