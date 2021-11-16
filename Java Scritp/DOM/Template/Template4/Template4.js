var header1 = document.createElement("h1")
var anc = document.createElement("a")
anc.href = "#"
anc.innerHTML = "Basic84"
header1.appendChild(anc)
document.getElementById("hgroup").appendChild(header1)

//For h2
var header2 = document.createElement("h2")
header2.innerHTML = "Free HTML5 Website Template"
document.getElementById("hgroup").appendChild(header2)

//For Form
var field_1 = document.createElement("input")
field_1.type = "text"
field_1.placeholder = "Search Our Websire..."
document.getElementById("field").appendChild(field_1)
var field_2 = document.createElement("input")
var att_f = document.createAttribute("id")
att_f.value = "sf_submit"
field_2.setAttributeNode(att_f)
field_2.type = "submit"
field_2.value = "submit"
document.getElementById("field").appendChild(field_2)


//FOr ul
var listElements = ["Narendra", "surendra", "Data", "varma", "kalyan"]
var list_link = ["#title", "#section1", "./new.html", "#section3", "#footer"];
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

//for slider
var sli = document.createElement("a")
sli.href = "#"
var sli_img = document.createElement("img")
sli.appendChild(sli_img)
sli_img.style.width = "100%"
sli_img.setAttribute("src", "../Template/images/83/" + "1.png")
document.getElementById("slider").appendChild(sli)

var shout1 = document.createElement("p")
shout1.innerHTML = "Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed. Facilispede estibulum nulla orna nisl velit elit ac aliquat non tincidunt.Namjusto cras urna urnaretra lor urna neque sed quis orci nulla laoremut vitae doloreet condimentumst."
// document.getElementsByClassName("shout").appendChild(shout1)
document.getElementById("shout").appendChild(shout1)

//for h1
var hh = document.createElement("h2")
hh.innerHTML = "Services We Offer"
document.getElementById("homepage").prepend(hh)

//for article
var artt = document.getElementsByClassName("art")
for (i = 0; i < artt.length; i++) {
    var art_fig = document.createElement("figure")
    var fig_img = document.createElement("img")
    art_fig.appendChild(fig_img)
    fig_img.setAttribute("src", "../Template/template_images/83/" + 32 + "x" + 32 + ".gif")
    artt[i].appendChild(art_fig)
    //for strong
    var str = document.createElement("strong")
    str.innerHTML = "Lorum ipsum dolor"
    artt[i].appendChild(str)
    //for p
    var one_p = document.createElement("p")
    one_p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper."
    artt[i].appendChild(one_p)
    //for 2nd p
    var one_p2 = document.createElement("p")
    var p2_att = document.createAttribute("class")
    p2_att.value = "more"
    one_p2.setAttributeNode(p2_att)
    var p2_a = document.createElement("a")
    p2_a.href = "#"
    p2_a.innerHTML = "Read More>>"
    one_p2.appendChild(p2_a)
    artt[i].appendChild(one_p2)
}
var qur = document.getElementsByClassName('one_quarter')
for (i = 0; i < qur.length; i++) {
    var qur_fig = document.createElement("figure")
    var qur_img = document.createElement("img")
    qur_fig.appendChild(qur_img)
    qur_img.style.width = "100%"
    qur_img.style.height = "300px"
    qur_img.setAttribute("src", "../Template/images/" + (Number(i) + 1) + ".jpg")
    qur[i].appendChild(qur_fig)
    //for figcaption
    var qur_cap = document.createElement("figcaption")
    qur_cap.innerHTML = "image Caption Here"
    qur[i].appendChild(qur_cap)
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