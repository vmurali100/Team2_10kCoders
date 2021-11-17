var header1 = document.createElement("h1")
var anc = document.createElement("a")
anc.href = "#"
anc.innerHTML = "Basic85"
header1.appendChild(anc)
document.getElementById("hgroup").appendChild(header1)

//For h2
var header2 = document.createElement("h2")
header2.innerHTML = "Free HTML5 Website Template"
document.getElementById("hgroup").appendChild(header2)

//FOr ul
var listElements = ["Narendra", "Registration", "data", "varma", "kalyan"]
var list_link = ["#title", "./form1.html", "./new.html", "#section3", "#footer"];
for (i = 0; i < listElements.length; i++) {

    //Step:1 Create Element
    var li = document.createElement("li")
    var anchor = document.createElement("a")
    // Step 2 : Adding a Text to Element
    anchor.innerHTML = listElements[i]
    anchor.setAttribute("href", list_link[i]);
    // Step 3 : Appending the Element to Body Section
    li.appendChild(anchor)
    li.style.textAlign = "center"
    document.getElementById("ul_dom").style.textAlign = "center"
    document.getElementById("ul_dom").appendChild(li)

}

//shout
var shout1 = document.createElement("p")
shout1.innerHTML = "Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed. Facilispede estibulum nulla orna nisl velit elit ac aliquat non tincidunt.Namjusto cras urna urnaretra lor urna neque sed quis orci nulla laoremut vitae doloreet condimentumst."
// document.getElementsByClassName("shout").appendChild(shout1)
document.getElementById("shout").appendChild(shout1)

//For latest
var paa = document.getElementsByClassName("one_quarterr")
for (i = 0; i < paa.length; i++) {
    var im = document.createElement("img")
    im.setAttribute("src", "../Template/template_images/85/" + 215 + "x" + 150 + ".gif")
    paa[i].appendChild(im)
}
var li_cap = document.createElement("figcaption")
var cap_a = document.createElement("a")
cap_a.href = "#"
cap_a.innerHTML = "View All Our Recent Work Here>>"
li_cap.appendChild(cap_a)
document.getElementById("one").appendChild(li_cap)

var article = document.getElementsByClassName("two")
for (i = 0; i < article.length; i++) {
    //for figure
    var one_fig = document.createElement("figure")
    var fig_img = document.createElement("img")
    fig_img.setAttribute("src", "../Template/template_images/83/" + 32 + "x" + 32 + ".gif")
    fig_img.style.width = "100%"
    one_fig.appendChild(fig_img)
    article[i].appendChild(one_fig)
    //for strong
    var str = document.createElement("strong")
    str.innerHTML = "Lorum ipsum dolor"
    article[i].appendChild(str)
    //for p
    var one_p = document.createElement("p")
    one_p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper."
    article[i].appendChild(one_p)
    //for 2nd p
    var one_p2 = document.createElement("p")
    var p2_att = document.createAttribute("class")
    p2_att.value = "more"
    one_p2.setAttributeNode(p2_att)
    var p2_a = document.createElement("a")
    p2_a.href = "#"
    p2_a.innerHTML = "Read More>>"
    one_p2.appendChild(p2_a)
    article[i].appendChild(one_p2)
}

//for footer
var foo = document.getElementById("footer")
var footer1 = document.createElement("p")
var footer2 = document.createElement("p")
var fo_att1 = document.createAttribute("class")
fo_att1.value = "f1_left"
footer1.setAttributeNode(fo_att1)
var fo_att2 = document.createAttribute("class")
fo_att2.value = "f1_right"
footer2.setAttributeNode(fo_att2)
var f_a1 = document.createElement("a")
var f_a2 = document.createElement("a")
f_a1.innerHTML = "Domain Name"
f_a2.innerHTML = " Os Templates"
f_a1.href = "#"
f_a2.href = "https://www.os-templates.com/"
f_a2.target = "_blank"
f_a2.title = "Free Website Templates"
footer1.innerHTML = "Copyright © 2018 - All Rights Reserved -" + "  " + f_a1.outerHTML
footer2.innerHTML = "Template by -" + "  " + f_a2.outerHTML
foo.appendChild(footer1)
foo.appendChild(footer2)