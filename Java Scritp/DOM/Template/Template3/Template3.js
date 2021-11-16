//For h1
var header1 = document.createElement("h1")
var anc = document.createElement("a")
anc.href = "#"
anc.innerHTML = "Basic83"
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

//for slider
var sli = document.createElement("a")
sli.href = "#"
var sli_img = document.createElement("img")
sli.appendChild(sli_img)
sli_img.setAttribute("src", "../Template/images/83/" + "1.png")
document.getElementById("slider").appendChild(sli)


//for article
var article = document.getElementsByClassName("one_quarter")
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

//For three
var three = document.getElementById("three_qu")
//for h2
var three_h = document.createElement("h2")
three_h.innerHTML = "Lorum ipsum dolor"
three.appendChild(three_h)
//for p
var three_p = document.createElement("p")
var three_a = document.createElement("a")
var three_a2 = document.createElement("a")
three_a.href = "https://www.os-templates.com/"
three_a.title = "Free Website Templates"
three_a.innerHTML = "OS Templates"
three_a2.href = "https://www.os-templates.com/templates-terms"
three_a2.innerHTML = "website template licence"
three_p.innerHTML = "This is a W3C compliant free website template from" + "  " + three_a.outerHTML + ". For full terms of use of this template please read our " + "  " + three_a2.outerHTML + "."
three.appendChild(three_p)

//for p2
var three_p2 = document.createElement("p")
var three_a22 = document.createElement("a")
three_p2.appendChild(three_a22)
three_a22.href = "https://www.os-templates.com/"
three_a22.innerHTML = "free website templates"
three_p2.innerHTML = "You can use and modify the template for both personal and commercial use. You must keep all copyright information and credit links in the template and associated files.For more HTML5 templates visit" + three_a22.outerHTML
three.appendChild(three_p2)
//footer
var foot = document.createElement("footer")
var foot_att = document.createAttribute("class")
foot_att.value = "more"
foot.setAttributeNode(foot_att)
var foot_a = document.createElement("a")
foot_a.href = "#"
foot_a.innerHTML = "Read More>>"
foot.appendChild(foot_a)
three.appendChild(foot)

//for last
var box = document.getElementById("bo")
var last = document.createElement("h2")
last.innerHTML = "Lorum ipsum dolor"
box.appendChild(last)
//for p
var last_p = document.createElement("p")
last_p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper pellentesque.Quisque non luctus sem."
box.appendChild(last_p)
//for a p
var last_p2 = document.createElement("p")
var p2_att = document.createAttribute("class")
p2_att.value = "more"
last_p2.setAttributeNode(p2_att)
var last_p2a = document.createElement("a")
last_p2a.href = "#"
last_p2a.innerHTML = "Read More>>"
last_p2.appendChild(last_p2a)
box.appendChild(last_p2)

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