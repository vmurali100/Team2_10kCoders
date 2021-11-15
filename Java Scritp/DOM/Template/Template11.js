var header1 = document.createElement("h1")
var anc = document.createElement("a")
anc.href = "#"
anc.innerHTML = "Basic88"
header1.appendChild(anc)
document.getElementById("hgroup").appendChild(header1)

//For h2
var header2 = document.createElement("h2")
header2.innerHTML = "Free HTML5 Website Template"
document.getElementById("hgroup").appendChild(header2)

var listElements = ["Narendra", "surendra", "srikanth", "varma", "kalyan"]
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

var sli = document.createElement("a")
sli.href = "#"
var sli_img = document.createElement("img")
sli.appendChild(sli_img)
sli_img.style.width = "100%"
sli_img.setAttribute("src", "../Template/images/83/" + "1.png")
document.getElementById("slider").appendChild(sli)

//for one_third
var one = document.getElementsByClassName("one_third")
for (i = 0; i < one.length; i++) {
    var one_fig = document.createElement("figure")
    var one_img = document.createElement("img")
    one_img.setAttribute("src", "../Template/template_images/" + 290 + "x" + 180 + ".gif")
    one_fig.appendChild(one_img)
    one[i].appendChild(one_fig)
    var one_cap = document.createElement("figcaption")
    one_fig.appendChild(one_cap)
    var cap_h2 = document.createElement("h2")
    cap_h2.innerHTML = "Indonectetus facilis"
    one_cap.appendChild(cap_h2)
    var cap_p = document.createElement("p")
    cap_p.innerHTML = "Nullamlacus dui ipsum conseque loborttis non euisque morbi penas dapibulum orna."
    one_cap.appendChild(cap_p)
    var one_fo = document.createElement("footer")
    var fo_att = document.createAttribute("class")
    fo_att.value = "more"
    one_fo.setAttributeNode(fo_att)
    var fo_a = document.createElement("a")
    fo_a.href = "#"
    fo_a.innerHTML = "Read More>>"
    one_fo.appendChild(fo_a)
    one[i].appendChild(one_fo)
}

//intro
var intro = document.getElementById("intro")
var art = document.createElement("article")
intro.appendChild(art)
var int_fig = document.createElement("figure")
art.appendChild(int_fig)
var int_img = document.createElement("img")
int_img.setAttribute("src", "../Template/template_images/" + 450 + "x" + 250 + ".gif")
int_fig.appendChild(int_img)
var int_cap = document.createElement("figcaption")
int_fig.appendChild(int_cap)
var cap_h = document.createElement("h2")
cap_h.innerHTML = "Indonectetus facilis leo nibh"
int_cap.appendChild(cap_h)
var cap_p = document.createElement("p")
var cap_a = document.createElement("a")
var cap_a2 = document.createElement("a")
cap_a.href = "https://www.os-templates.com/"
cap_a.title = "Free Website Template"
cap_a.innerHTML = "OS Templates"
cap_a2.href = "https;//www.os-templates.com/template-terms"
cap_a2.innerHTML = "website template licence"
cap_p.innerHTML = "This is a W3C compliant free website template from" + "   " + cap_a.outerHTML + ". For full terms of use of this template please read our" + "  " + cap_a2.outerHTML + "."
int_cap.appendChild(cap_p)
var cap_p2 = document.createElement("p")
var p2_a = document.createElement("a")
p2_a.href = "https://www.os-templates.com/"
p2_a.innerHTML = "free website templates"
cap_p2.innerHTML = "You can use and modify the template for both personal and commercial use. You mustkeep all copyright information and credit links in the template and associated files.For more HTML5 templates visit" + p2_a.outerHTML + "."
int_cap.appendChild(cap_p2)

//for row3
var one = document.getElementsByClassName("one_quarter")
for (i = 0; i < one.length; i++) {
    var uu_h1 = document.createElement("h2")
    var h_att = document.createAttribute("class")
    h_att.value = "title"
    uu_h1.setAttributeNode(h_att)
    uu_h1.innerHTML = "Link Block"
    one[i].appendChild(uu_h1)
    var nav = document.createElement("nav")
    one[i].appendChild(nav)
    var ul = document.createElement("ul")
    nav.appendChild(ul)
    var ul_att = document.createAttribute("id")
    ul_att.value = "ul_do"
    ul.setAttributeNode(ul_att)

    var ul_l = document.getElementById("ul_do")
    for (i = 0; i < ul_l.length; i++) {
        var list = ["NLorem ipsum dolor sit", "Amet consectetur", "Praesent vel sem id", "Curabitur hendrerit est", "Sed a nulla urna"]
        for (i = 0; i < list.length; i++) {
            //Step:1 Create Element
            var li = document.createElement("li")
            var anchor = document.createElement("a")
            // Step 2 : Adding a Text to Element
            anchor.innerHTML = list[i]
            // Step 3 : Appending the Element to Body Section
            li.appendChild(anchor)
            li.style.textAlign = "center"
            // document.getElementById("ul_do").style.textAlign = "center"
            ul_l.appendChild(li)

        }
    }
}





//for footer
var foo = document.getElementById("copyright")
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