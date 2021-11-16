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

    var a = document.createElement("a")
    if (i == 0) {
        a.innerText = "Home"
        document.getElementsByClassName("lis")[i].appendChild(a)
        continue
    }

    if (i == 4) {
        a.innerText = "Employee Data"
        document.getElementsByClassName("lis")[i].appendChild(a)
        a.setAttribute("href", "./users.html")
        continue

    }

    a.innerText = "Text Link"
    document.getElementsByClassName("lis")[i].appendChild(a)
}

var img = document.createElement("img")
img.setAttribute("src", "./images/demo/img1.gif")
document.getElementById("slider").appendChild(img)

for (i = 0; i < 3; i++) {
    var article = document.createElement('article')
    document.getElementById("services").appendChild(article)
    article.setAttribute("class", "one_third")

    var figure = document.createElement("figure")
    document.getElementsByClassName("one_third")[i].appendChild(figure)
    figure.setAttribute("class", "figures")

    var img = document.createElement("img")
    document.getElementsByClassName("figures")[i].appendChild(img)
    img.setAttribute("src", "./images/demo/imgs2.gif")

    var figcaption = document.createElement("figcaption")
    document.getElementsByClassName("one_third")[i].appendChild(figcaption)

    var h2 = document.createElement("h2")
    h2.innerText = "Indonectetus facilis"
    document.getElementsByClassName("one_third")[i].appendChild(h2)

    var p = document.createElement("p")
    p.innerText = "Nullamlacus dui ipsum conseque loborttis non euisque morbi penas dapibulum orna."
    document.getElementsByClassName("one_third")[i].appendChild(p)

    var p = document.createElement("p")
    p.innerText = "Read More>>"
    p.style.float = "right"
    p.style.color = "orange"
    document.getElementsByClassName("one_third")[i].appendChild(p)
}

var article = document.createElement("article")
document.getElementById("intro").appendChild(article)
article.setAttribute("id", "second_article")

var figure = document.createElement("figure")
document.getElementById("second_article").appendChild(figure)
figure.setAttribute("id", "second_img")

var img = document.createElement("img")
document.getElementById("second_img").appendChild(img)
img.setAttribute("src", "./images/demo/imgs3.gif ")

var figcaption = document.createElement("figcaption")
document.getElementById("second_article").appendChild(figcaption)
figcaption.setAttribute("id", "second_figcaption")

var h2 = document.createElement("h2")
h2.innerText = "Indonectetus facilis leo nibh"
document.getElementById("second_figcaption").appendChild(h2)

var p = document.createElement("p")
p.innerText = "This is a W3C compliant free website template from  Templates. For full terms of use of this template please read website template licence"
document.getElementById("second_figcaption").appendChild(p)

var p2 = document.createElement("p")
p2.innerText = "You can use and modify the template for both personal and commercial use. You must keep all copyright information and credit links in the template and associated files. For more HTML5 templates visit free website templates"
document.getElementById("second_figcaption").appendChild(p2)

var p3 = document.createElement("p")
p3.innerText = "ReadMore>>"
p3.style.color = "orange"
p3.style.textAlign = "center"
document.getElementById("second_figcaption").appendChild(p3)


//links
navul3 = document.getElementsByClassName("navul1")
console.log(navul3)
for(s=0;s<5;s++){
    for(i=0;i<4;i++){
        var a = document.createElement("li")
        a.innerText= "MyOwnLi"
        document.getElementsByClassName("navul1")[i].appendChild(a)
        li.setAttribute("id","li")
        
       
           
        }
    
}
var p3 = document.createElement("p")
p3.innerText = "Copyright &copy; 2018 - All Rights Reserved -Domain Name"
document.getElementById("copyright").appendChild(p3)
var p4 = document.createElement("p")
p4.innerText = "webDesigner-Teja"
document.getElementById("copyright").appendChild(p4)
p4.style.fontWeight="bold"
p4.style.fontSize="20px"
p4.style.color="pink"
p4.style.float = "right"





