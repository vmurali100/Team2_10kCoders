var head = document.createElement("h1")
var anchor = document.createElement("a")
anchor.innerHTML = "template2"
head.append(anchor)
document.getElementById("hgroup").appendChild(head)

var head1 = document.createElement("h2")
head1.innerHTML = "nature images"
document.getElementById("hgroup").appendChild(head1)

var fi = document.createElement("input")
fi.type = "text"
fi.placeholder = "Search Our Website"
document.getElementById("f").appendChild(fi)
var fie = document.createElement("input")
var at = document.createAttribute("id")
at.value = "submit"
fie.setAttributeNode(at)
fie.type = "submit"
fie.value = "submit"
document.getElementById("f").appendChild(fie)

var natureImages = ["earth", "rivers", "lakes", "plants", "trees"]
for (i = 0; i < natureImages.length; i++) {
    var li = document.createElement("li");
    var anchor = document.createElement("a")
    anchor.innerHTML = natureImages[i]
    li.appendChild(anchor)
    document.getElementById("demo").appendChild(li)
}

var s = document.createElement("a")
s.href = "#"
var simg = document.createElement("img")
s.appendChild(simg)
simg.setAttribute("src", "./images/" + "aaa.gif")
document.getElementById("slider").appendChild(s)

var p1 = document.createElement("p")
p1.innerHTML = "  Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed. Facilispede estibulum nulla orna nisl velit elit ac aliquat non tincidunt namjusto cras urna."
document.getElementById("pt").appendChild(p1)

var h1 = document.createElement("h1")
h1.innerHTML = "Services We Offer"
document.getElementById("hh").appendChild(h1)

var allImages = document.getElementsByClassName("fig");
for (i = 0; i < allImages.length; i++) {
    console.log(allImages[i])
    var imgElm = document.createElement("img")
    imgElm.style.width = "100%"
    var imgNum = Number(i) + 1
    imgElm.setAttribute("src", "./images/" + imgNum + ".gif")
    allImages[i].appendChild(imgElm)
}

var strn = document.getElementsByClassName("st");
for (i = 0; i < strn.length; i++) {
    var s1 = document.createElement("p1")
    s1.innerHTML = "Lorum ipsum dolor"
    strn[i].appendChild(s1)
}

var ptr = document.getElementsByClassName("pt");
for (i = 0; i < ptr.length; i++) {
    var pt1 = document.createElement("p2")
    pt1.innerHTML = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33"
    ptr[i].appendChild(pt1)
}

var read = document.getElementsByClassName("more")
for (i = 0; i < read.length; i++) {
    var a1 = document.createElement("a")
    a1.href = "#"
    a1.innerHTML = "Readmore &raquo"
    read[i].appendChild(a1)
}
var allImages = document.getElementsByClassName("figu");
for (i = 0; i < allImages.length; i++) {
    console.log(allImages[i])
    var imgElm = document.createElement("img")
    imgElm.style.width = "215px"
    imgElm.style.height="315px"
    var imgNum = Number(i) + 1
    imgElm.setAttribute("src", "./images/" + imgNum + ".jpeg")
    allImages[i].appendChild(imgElm)
}

var fl1 = document.createElement("h")
fl1.innerHTML = " Copyright@2021 - All Rights Reserved"
document.getElementById("fl_left").appendChild(fl1)


var fl2 = document.getElementById("fl_right")
var flr = document.createElement("a")
flr.innerHTML = "nature images"
flr.href = "https://unsplash.com/images/nature"
flr.target = ""
fl2.innerHTML = "Templates by " + " " + flr.target
fl2.appendChild(flr)

var h1 = document.createElement("h1")
h1.innerHTML = "Latest From The Gallery"
document.getElementById("hhh").appendChild(h1)