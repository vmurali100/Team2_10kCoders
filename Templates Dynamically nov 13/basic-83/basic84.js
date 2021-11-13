//Heading Part
var heading1 = document.createElement("h1")
heading1.innerHTML = "Basic83"
console.log(heading1)
document.getElementById("hgroup").appendChild(heading1)
var heading2 = document.createElement("h2")
heading2.innerHTML = "This is the heading Descrption"
document.getElementById("hgroup").appendChild(heading2)


//NavBar
for (i = 0; i < 5; i++) {
    var li = document.createElement("li")
    document.getElementById("navul").append(li)
    li.setAttribute("class", "item")
}

console.log(navul)
var lis = document.getElementsByClassName("item")
console.log(lis)
for(i=0;i<lis.length;i++){
    var a = document.createElement("a")
    a.innerText="Text Link"
    document.getElementsByClassName("item")[i].appendChild(a)
}

//banner
var img = document.createElement("img")
var img1 = document.getElementById("img1").appendChild(img)
img1.setAttribute("src","./images/demo/img1.jpg")

for(i=0;i<4;i++){
        var article = document.createElement("article")
        document.getElementById("services").appendChild(article)
        article.setAttribute("class","one_quarter")

}
var articles = document.getElementById("services")
console.log(articles)

for(i=0;i<4;i++){
    var figure = document.createElement("figure")
    document.getElementsByClassName("one_quarter")[i].appendChild(figure)
    figure.setAttribute("class","imgs")


    var strong = document.createElement("strong")
    strong.innerText="Lorum ipsum dolor"
    document.getElementsByClassName("one_quarter")[i].appendChild(strong)


    var p1 = document.createElement("p")
    p1.innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper."
    document.getElementsByClassName("one_quarter")[i].appendChild(p1)
   
}

for(i=0;i<4;i++){
    var img = document.createElement("img")
    document.getElementsByClassName("imgs")[i].appendChild(img)
    img.setAttribute("src","./images/demo/img2.gif")
}


var article = document.createElement("article")
document.getElementById("services").appendChild(article)
article.setAttribute("class","three_quater")
console.log(article)


//three_quarter
var h2 = document.createElement("h2")
h2.innerText="Lorum ipsum dolor"
document.getElementsByClassName("three_quarter")[0].appendChild(h2)

var p1 = document.createElement("p")
p1.innerText="You can use and modify the template for both personal and commercial use. You must keep all copyright information and credit links in the template and associated files. For more HTML5 templates visit"
document.getElementsByClassName("three_quarter")[0].appendChild(p1)

var p2 = document.createElement("p2")
p2.innerText="You can use and modify the template for both personal and commercial use. You must keep all copyright information and credit links in the template and associated files. For more HTML5 templates visit"
document.getElementsByClassName("three_quarter")[0].appendChild(p2)

//footer
var p1 = document.createElement("p")
p1.innerText="Copyright &copy; 2018 - All Rights Reserved -Domain Name"
console.log(p1)
var dd = document.getElementById("footer")
dd.appendChild(p1)
console.log(dd)


