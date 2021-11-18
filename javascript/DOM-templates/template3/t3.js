var head = document.createElement("h1")
var anchor = document.createElement("a")
anchor.innerHTML = "template3"
head.append(anchor)
document.getElementById("hgroup").appendChild(head)

var head1 = document.createElement("h2")
head1.innerHTML = "nature images"
document.getElementById("hgroup").appendChild(head1)

var natureImages = ["earth", "rivers", "lakes", "plants", "trees"]
for (i = 0; i < natureImages.length; i++) {
    var li = document.createElement("li");
    var anchor = document.createElement("a")
    anchor.innerHTML = natureImages[i]
    li.appendChild(anchor)
    document.getElementById("demo").appendChild(li)
}

var p1 = document.createElement("p")
p1.innerHTML = " Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed. Facilispede estibulum nulla orna nisl velit elit ac aliquat non tincidunt. Namjusto cras urna urnaretra lor urna neque sed quis orci nulla laoremut vitae doloreet condimentumst."
document.getElementById("pt").appendChild(p1)

var allImages = document.getElementsByClassName("li");
for (i = 0; i < allImages.length; i++) {
    console.log(allImages[i])
    var imgElm = document.createElement("img")
    imgElm.style.width = "215px"
    imgElm.style.height = "150px"
     var imgNum = Number(i) + 1
    imgElm.setAttribute("src", "./images/" + imgNum + ".jpg")
    allImages[i].appendChild(imgElm)
}

var fig=document.createElement("p2");
fig.href="#"
fig.innerHTML="View All Our Recent Work Here &raquo;"
document.getElementById("figc").appendChild(fig)

var allImages=document.getElementsByClassName("fi");
for(i=0;i<allImages.length;i++){
    console.log(allImages[i])
    var im=document.createElement("img")
    im.style.width="32px"
    im.style.height="32px"
    var imNum=Number(i)+1
    im.setAttribute("src","./images/"+imNum+".jpg")
    allImages[i].appendChild(im)
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
    pt1.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non diam erat. In fringilla massa ut nisi ullamcorper."
    ptr[i].appendChild(pt1)
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
var flr = document.createElement("a")
flr.innerHTML = "natureimages"
flr.href = "https://unsplash.com/images/nature"
flr.target = ""
fl2.innerHTML = "Templates by " + " " + flr.target
fl2.appendChild(flr)