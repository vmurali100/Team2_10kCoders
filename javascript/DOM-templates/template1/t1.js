var head = document.createElement("h1")
var anchor = document.createElement("a")
anchor.innerHTML = "template1"
head.append(anchor)
document.getElementById("hgroup").appendChild(head)

var head1 = document.createElement("h2")
head1.innerHTML = "nature images"
document.getElementById("hgroup").appendChild(head1)


var natureImages = ["rose", "lilli", "jasmine", "peacock", "rabbit"]
for (i = 0; i < natureImages.length; i++) {
    var li = document.createElement("li");
    var anchor = document.createElement("a")
    anchor.innerHTML = natureImages[i]
    li.appendChild(anchor)
    document.getElementById("demo").appendChild(li)
}


var str = document.createElement("l")
str.innerHTML = "Lorem ipsum dolor"
document.getElementById("st").appendChild(str)

var p1 = document.createElement("p")
p1.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper."
document.getElementById("pt").appendChild(p1)

var str1 = document.createElement("l1")
str1.innerHTML = "Lorem ipsum dolor"
document.getElementById("st1").appendChild(str1)

var p2 = document.createElement("p")
p2.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper."
document.getElementById("pt1").appendChild(p2)

var str2 = document.createElement("l")
str2.innerHTML = "Lorem ipsum dolor"
document.getElementById("st2").appendChild(str2)

var p3 = document.createElement("p")
p3.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper."
document.getElementById("pt2").appendChild(p3)

var str3 = document.createElement("l")
str3.innerHTML = "Lorem ipsum dolor"
document.getElementById("st3").appendChild(str3)

var p4 = document.createElement("p")
p4.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper."
document.getElementById("pt3").appendChild(p4)

var str4 = document.createElement("l")
str4.innerHTML = "Lorem ipsum dolor"
document.getElementById("h").appendChild(str4)

var p5 = document.createElement("p")
p5.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
document.getElementById("pt5").appendChild(p5)

var str5 = document.createElement("l")
str5.innerHTML = "Lorem ipsum dolor"
document.getElementById("h1").appendChild(str5)

var p6 = document.createElement("l")
p6.innerHTML = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper pellentesque. Quisque non luctus sem."
document.getElementById("pt6").appendChild(p6)


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

var s = document.createElement("a")
s.href = "#"
var simg = document.createElement("img")
s.appendChild(simg)
simg.setAttribute("src", "./images/" + "i.gif")
document.getElementById("slider").appendChild(s)


var allImages = document.getElementsByClassName("image");
for (i = 0; i < allImages.length; i++) {
    console.log(allImages[i])
    var imgElm = document.createElement("img")
    imgElm.style.width = "32px"
    imgElm.style.height="32px"
    var imgNum = Number(i) + 1
    imgElm.setAttribute("src", "./images/" + imgNum + ".jpeg")
    allImages[i].appendChild(imgElm)
}

var read = document.getElementsByClassName("more")
for (i = 0; i < read.length; i++) {
    var a1 = document.createElement("a")
    a1.href = "#"
    a1.innerHTML = "Readmore &raquo"
    read[i].appendChild(a1)
}

var fl1 = document.createElement("h")
fl1.innerHTML = " Copyright@2021 - All Rights Reserved"
document.getElementById("fl_left").appendChild(fl1)


var fl2 = document.getElementById("fl_right")
var flr=document.createElement("a")
flr.innerHTML="nature images"
flr.href="https://unsplash.com/images/nature"
flr.target=""
fl2.innerHTML="Templates by "+" "+flr.target
fl2.appendChild(flr)