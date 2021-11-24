//For header h1
var header1 = document.createElement("h1")
var anc = document.createElement("a")
anc.innerHTML = "Basic87"
header1.append(anc)
document.getElementById("hgroup").appendChild(header1)

//For Header h2
var header2 = document.createElement("h2")
header2.innerHTML = "Free HTML5 Website Template"
document.getElementById("hgroup").appendChild(header2)


var listElements = ["HOME", "TEXT", "BUTTON", "TABLE", "REGISTER"]
for (i = 0; i < listElements.length; i++) {

    //Step:1 Create Element
    var li = document.createElement("li")
    var anchor = document.createElement("a")
    // Step 2 : Adding a Text to Element
    anchor.innerHTML = listElements[i]
    // Step 3 : Appending the Element to Body Section
    li.appendChild(anchor)
    document.getElementById("ul_dom").appendChild(li)

}


//For Images
var allImages = document.getElementsByClassName("myImage")
for (i = 0; i < allImages.length; i++) {
    var image = document.createElement("img")
    image.style.width = "100%"
    image.style.height = "300px"
    // const sty = document.querySelector(".myImage")
    // sty.style.width = '100%';
    image.setAttribute("src", "../Template/images/" + (Number(i) + 1) + ".jpg")
    allImages[i].append(image)
}

// Figcaption
var allFigcaption = document.getElementsByClassName("myImage")
for (i = 0; i < allFigcaption.length; i++) {
    var caption = document.createElement("figcaption")
    caption.style.width = "98%"
    caption.innerHTML = "Image Caption Here"
    allFigcaption[i].append(caption)
}


//For Shout
var shout1 = document.createElement("p")
shout1.innerHTML = "Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed. Facilispede estibulum nulla orna nisl velit elit ac aliquat non tincidunt.Namjusto cras urna urnaretra lor urna neque sed quis orci nulla laoremut vitae doloreet condimentumst."
// document.getElementsByClassName("shout").appendChild(shout1)
document.getElementById("one").appendChild(shout1)

//For list images
var allImages2 = document.getElementsByClassName("fig2")
for (i = 0; i < allImages2.length; i++) {
    var image2 = document.createElement("img")
    image2.setAttribute("src", "../Template/images/" + (Number(i) + 1) + ".jpg")
    allImages2[i].appendChild(image2)
}
// For list figcaption
var allFigcaption2 = document.getElementsByClassName("fig2")
for (i = 0; i < allFigcaption2.length; i++) {
    var caption2 = document.createElement("figcaption")
    var cap_h2 = document.createElement("h2")
    var cap_p = document.createElement("p")
    var cap_a = document.createElement("a")
    var cap_a2 = document.createElement("a")
    var foot = document.createElement("footer")
    var attclass = document.createAttribute("class")
    attclass.value = "more"
    foot.setAttributeNode(attclass)
    var foot_a = document.createElement("a")
    cap_h2.innerHTML = "Indonectetus facilis leo nibh"
    cap_p.innerHTML = "This is a W3C compliant free website template from"
    cap_a.href = "https://www.os-templates.com/"
    cap_a.title = "Free Website Templates"
    cap_a.innerHTML = "OS Templates"
    cap_a2.href = "https://www.os-templates.com/templates-terms"
    cap_a2.innerHTML = "website template licence"
    cap_p.innerHTML = "This is a W3C compliant free website template from" + " " + cap_a.outerHTML + ". For full terms of use of this template please read our" + cap_a2.outerHTML + "."
    foot_a.href = "#"
    foot_a.innerHTML = "Read More>>"
    foot.appendChild(foot_a)
    caption2.appendChild(cap_h2)
    caption2.appendChild(cap_p)
    caption2.appendChild(foot)
    allFigcaption2[i].append(caption2)
}



//For Aside List
var aside = document.getElementById("right_column")
var header3 = document.createElement("h2")
header3.innerHTML = "Categories"
aside.appendChild(header3)
var aside_nav = document.createElement("nav")
aside.appendChild(aside_nav)
var aside_ul = document.createElement("ul")
aside_nav.appendChild(aside_ul)
var ul_att = document.createAttribute("id")
ul_att.value = "a_ul"
aside_ul.setAttributeNode(ul_att)
var aside_ul_li = ["Free WebSite Templates", "Free CSS Templates", "Free XHTML Templates", "Free Web Templates", "Free WebSite Layouts", "Free HTML5 Templates", "Free Webdesign Templates", "Free Fire Works Templates", "Free PNG Templates", "Free WebSite Themes"]
for (i = 0; i < aside_ul_li.length; i++) {
    var aside_li = document.createElement("li")
    var aside_anchor = document.createElement("a")
    aside_anchor.innerHTML = aside_ul_li[i]
    aside_li.appendChild(aside_anchor)
    document.getElementById("a_ul").appendChild(aside_li)
}


//For Footer
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
footer2.innerHTML = "Template by" + "  " + f_a2.outerHTML
foo.appendChild(footer1)
foo.appendChild(footer2)