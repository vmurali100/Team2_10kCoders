//<h1><a href="#"></a></h1>
//     <h2>Free HTML5 Website Template</h2>
var h1 = document.createElement("h1")
h1.innerText = "Basic 84"
var print = document.getElementById('hgroup').appendChild(h1)

console.log(print)

var h2 = document.createElement("h2")
h2.innerText = "Free HTML5 Website Template"
document.getElementById("hgroup").appendChild(h2)

//navbar
for (i = 0; i < 5; i++) {
      var li = document.createElement("li")
      document.getElementById("navul").appendChild(li)
      li.setAttribute("class", "lis")
}
var print = document.getElementById("navul")
console.log(print)

for (j = 0; j < 5; j++) {
      if(j==4){
            var a = document.createElement("a")
            a.innerText = "Users Data"
            document.getElementsByClassName("lis")[j].appendChild(a)
            a.setAttribute("href","./users.html")
            a.setAttribute("id","user")
            break
            
      }
      
      var a = document.createElement("a")
      a.innerText = "Text Link"
      document.getElementsByClassName("lis")[j].appendChild(a)

     
}


//<a href="#"><img src="images/demo/960x360.gif" alt=""></a>
var a1 = document.createElement("a")
document.getElementById("slider").appendChild(a1)
a1.setAttribute("id", "imga")

var img = document.createElement("img")
document.getElementById("imga").appendChild(img)
img.setAttribute("src", "./images/demo/img1.gif")

var p = document.createElement("p")
p.innerText = "Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed. Facilispede estibulum nulla orna nisl velit elit ac aliquat non tincidunt namjusto cras urna."
document.getElementById("shout").append(p)

document.getElementById("h1s").innerText = "Services We offer"
for (i = 0; i < 4; i++) {
      var article = document.createElement("article")
      document.getElementById("services").appendChild(article)

}
for (j = 0; j < 4; j++) {
      var figure = document.createElement("figure")
      figure.setAttribute("class", "img2")
      document.getElementsByTagName("article")[j].appendChild(figure)


      var strong = document.createElement("strong")
      strong.innerText = "Lorum ipsum dolor"
      document.getElementsByTagName("article")[j].appendChild(strong)

      var p = document.createElement("p")
      p.innerText = "For more HTML5 templates visit https://www.os-templates.com/ free website templates"
      document.getElementsByTagName("article")[j].appendChild(p)
}
var arts = document.getElementById("services")
console.log(arts)

var imgs = document.getElementsByClassName("img2")
console.log(imgs)
for (i = 0; i < imgs.length; i++) {
      var img = document.createElement("img")
      document.getElementsByClassName("img2")[i].appendChild(img)
      img.setAttribute("src", "./images/demo/img2.gif")
}

for (i = 0; i < 4; i++) {
      var article = document.createElement("article")
      document.getElementById("latest").appendChild(article)
      article.setAttribute("class", "one_quarter")
}
var dd = document.getElementById("latest")
console.log(dd)

for (j = 0; j < 4; j++) {
      var figure = document.createElement("figure")
      document.getElementsByClassName("one_quarter")[j].appendChild(figure)
      figure.setAttribute("class", "imgs1")

      var figcaption = document.createElement("figcaption")
      figcaption.innerText = "Image Caption Here"
      document.getElementsByClassName("one_quarter")[j].appendChild(figcaption)

      var sd = document.getElementsByClassName("img1")
      console.log(sd)

      var img = document.createElement("img")
      document.getElementsByClassName("imgs1")[j].appendChild(img)
      img.setAttribute("src", "./images/demo/img3.gif")
}


var p1 = document.createElement("p")
p1.innerText = "Copyright &copy; 2018 - All Rights Reserved -Domain Name"
p1.setAttribute("class", "f1_left")
document.getElementById("footer").appendChild(p1)

var p2 = document.createElement("p")
p2.innerText="Template by  OS Templates"
p2.setAttribute("class","f1_right")
document.getElementById("footer").appendChild(p2)
p2.style.float="right"
