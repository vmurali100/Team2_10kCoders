//Header
var h1 = document.createElement("h1")
h1.innerText = "Basic 87"
document.getElementById("hgroup").appendChild(h1)

var h2 = document.createElement("h2")
h2.innerText = "Free HTML5 Website Template"
document.getElementById("hgroup").appendChild(h2)
//NavBar
for(i=0;i<5;i++){
    var li = document.createElement("li")
    document.getElementById("navul").appendChild(li)
    li.setAttribute("class","li")

    var a = document.createElement("a")
    if(i==0){
        a.innerText = "Home"
        document.getElementsByClassName("li")[i].appendChild(a)
        continue
    }
    if(i==4){
        a.innerText = "DATA LINK"
        a.setAttribute("href","./users.html")
        document.getElementsByClassName("li")[i].appendChild(a)
        continue
    }
    a.innerText = "Text Link"
    document.getElementsByClassName("li")[i].appendChild(a)
}
for(i=0;i<4;i++){
    var article = document.createElement("article")
    document.getElementById("latest").appendChild(article)
    article.setAttribute("class","one_quarter")
}
for(i=0;i<4;i++){
var figure = document.createElement("figure")
    document.getElementsByClassName("one_quarter")[i].appendChild(figure)
    figure.setAttribute("class","imgs")
    var img = document.createElement("img")
    document.getElementsByClassName("imgs")[i].appendChild(img)
    img.setAttribute("src","./images/demo/imgs1.gif")

    var figcaption = document.createElement("figcaption")
    figcaption.innerText = "Image Caption Here"
    document.getElementsByClassName("one_quarter")[i].appendChild(figcaption)
}

var p = document.createElement("p")
p.innerText = "Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed. Facilispede estibulum nulla orna nisl velit elit ac aliquat non tincidunt. Namjusto cras urna urnaretra lor urna neque sed quis orci nulla laoremut vitae doloreet condimentumst."
document.getElementById("shout").appendChild(p)
for(i=0;i<2;i++){
    li = document.createElement("li")
    document.getElementById("navul1").appendChild(li)
    
}
<li>
            <article class="clear">
              <figure><img src="images/demo/180x150.gif" alt="">
                <figcaption>
                  <h2>Indonectetus facilis leo nibh</h2>
                  <p>This is a W3C compliant free website template from <a href="https://www.os-templates.com/" title="Free Website Templates">OS Templates</a>. For full terms of use of this template please read our <a href="https://www.os-templates.com/template-terms">website template licence</a>.</p>
                  <footer class="more"><a href="#">Read More &raquo;</a></footer>
                </figcaption>
              </figure>
            </article>
          </li>
          <li class="last">
            <article class="clear">
              <figure><img src="images/demo/180x150.gif" alt="">
                <figcaption>
                  <h2>Indonectetus facilis leo nibh</h2>
                  <p>You can use and modify the template for both personal and commercial use. You must keep all copyright information and credit links in the template and associated files. For more HTML5 templates visit <a href="https://www.os-templates.com/">free website templates</a>.</p>
                  <footer class="more"><a href="#">Read More &raquo;</a></footer>
                </figcaption>
              </figure>
            </article>
          </li>