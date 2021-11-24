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

var listElements = ["HOME", "TEXTLINK", "TABLE", "TEXTLINK", "REGISTER"]
for (i = 0; i < listElements.length; i++) {

    //Step:1 Create Element
    var li = document.createElement("li")
    var anchor = document.createElement("a")
    // Step 2 : Adding a Text to Element
    anchor.innerHTML = listElements[i]
    // Step 3 : Appending the Element to Body Section
    li.appendChild(anchor)
    li.style.textAlign = "center"
    document.getElementById("ul_dom").style.textAlign = "center"
    document.getElementById("ul_dom").appendChild(li)

}

//for slider
var fig = document.createElement("figure")
var sli_img = document.createElement("img")
fig.appendChild(sli_img)
// sli_img.style.width = "50%"
sli_img.setAttribute("src", "../Template/images/83/" + "1.png")
fig.appendChild(sli_img)
document.getElementById("slider").appendChild(fig)
var sli_cap = document.createElement("figcaption")
var cap_h = document.createElement("h2")
cap_h.innerHTML = "Eu justo augue estas"
sli_cap.appendChild(cap_h)
var cap_p = document.createElement("p")
cap_p.innerHTML = "Nullamlacus dui ipsum conseque loborttis non euisque morbi penas dapibulum orna.Urnaultrices quis curabitur phasellentesque congue magnis vestibulum quismodo nulla et feugiat adipiscinia pellentum leo."
sli_cap.appendChild(cap_p)
fig.appendChild(sli_cap)

var cap_p2 = document.createElement("p")
var p2_att = document.createAttribute("class")
p2_att.value = "more"
cap_p2.setAttributeNode(p2_att)
var p2_a = document.createElement("a")
p2_a.href = "#"
p2_a.innerHTML = "Read More>>"
cap_p2.appendChild(p2_a)
sli_cap.appendChild(cap_p2)

var third = document.getElementsByClassName("one_third")
for (i = 0; i < third.length; i++) {
    var third_h = document.createElement("h2")
    third_h.innerHTML = "Lorum ipsum dolor"
    third[i].appendChild(third_h)
    var third_img = document.createElement("img")
    third_img.setAttribute("src", "../Template/template_images/86/" + 80 + "x" + 80 + ".gif")
    third[i].appendChild(third_img)
    var third_p = document.createElement("p")
    third_p.innerHTML = "Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed. Facilispede estibulum nulla orna nisl velit elit ac aliquat non tincidunt.Namjusto crasurna urnaretra lor urna neque sed quis orci nulla.Laoremut vitae doloreet condimentumstphasellentes dolor ut a ipsum id consectetus.Inpede cumst vitae ris tellentesque fringintesquet."
    third[i].appendChild(third_p)
    var fo = document.createElement("footer")
    var fo_att = document.createAttribute("class")
    fo_att.value = "more"
    fo.setAttributeNode(fo_att)
    var fo_a = document.createElement("a")
    fo_a.href = "#"
    fo_a.innerHTML = "Read More>>"
    fo.appendChild(fo_a)
    third[i].appendChild(fo)
}

var article = document.getElementsByClassName("one_quarter")
for (i = 0; i < article.length; i++) {
    //for figure
    var one_fig = document.createElement("figure")
    var fig_img = document.createElement("img")
    fig_img.setAttribute("src", "../Template/template_images/86/" + 215 + "x" + 100 + ".gif")
    one_fig.appendChild(fig_img)
    article[i].appendChild(one_fig)
    //for strong
    var str = document.createElement("h2")
    str.innerHTML = "Indonectetus facilis"
    article[i].appendChild(str)
    //for p
    var one_p = document.createElement("p")
    one_p.innerHTML = "Nullamlacus dui ipsum conseque loborttis non euisque morbi penas dapibulum orna."
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