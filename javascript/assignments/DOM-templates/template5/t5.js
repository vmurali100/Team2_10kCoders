var head = document.createElement("h1")
var anchor = document.createElement("a")
anchor.innerHTML = "template5"
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

var sl=document.createElement("a")
sl.href="#"
var fi=document.createElement("img")
fi.style.width="960px"
fi.style.height="360px"
sl.appendChild(fi)
fi.setAttribute("src","./images/"+"2.jpg")
document.getElementById("slider").appendChild(sl)

var article=document.getElementsByClassName("one_third")
for(i=0;i<article.length;i++){
    var hhh=document.createElement("h2")
    hhh.innerHTML="Indonectetus facilis"
    article[i].appendChild(hhh)

    var figg=document.createElement("img")
    figg.style.width="290px"
    figg.style.height="180px"
    var imNum=Number(i)+1
    figg.setAttribute("src","./images/"+imNum+".jpg")
    article[i].appendChild(figg)

   var pp=document.createElement("p") 
   pp.innerHTML="Nullamlacus dui ipsum conseque loborttis non euisque morbi penas dapibulum orna."
   article[i].appendChild(pp)
}

var re=document.getElementsByClassName("one_third")
for(i=0;i<re.length;i++){
    var ree=document.createElement("reee")
    ree.href="#"
    ree.innerHTML="Read More &raquo;"
    re[i].appendChild(ree)
}

var natureImages = ["earth", "rivers", "lakes", "plants", "trees"]
for (i = 0; i < natureImages.length; i++) {
    var li = document.createElement("li");
    var anchor = document.createElement("a")
    anchor.innerHTML = natureImages[i]
    li.appendChild(anchor)
    document.getElementById("demo4").appendChild(li)
}

var natureImages = ["earth", "rivers", "lakes", "plants", "trees"]
for (i = 0; i < natureImages.length; i++) {
    var li = document.createElement("li");
    var anchor = document.createElement("a")
    anchor.innerHTML = natureImages[i]
    li.appendChild(anchor)
    document.getElementById("demo1").appendChild(li)
}
var natureImages = ["earth", "rivers", "lakes", "plants", "trees"]
for (i = 0; i < natureImages.length; i++) {
    var li = document.createElement("li");
    var anchor = document.createElement("a")
    anchor.innerHTML = natureImages[i]
    li.appendChild(anchor)
    document.getElementById("demo2").appendChild(li)
}

var natureImages = ["earth", "rivers", "lakes", "plants", "trees"]
for (i = 0; i < natureImages.length; i++) {
    var li = document.createElement("li");
    var anchor = document.createElement("a")
    anchor.innerHTML = natureImages[i]
    li.appendChild(anchor)
    document.getElementById("demo3").appendChild(li)
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

var fi=document.createElement("img")
fi.style.width="450px"
fi.style.height="250px"
fi.setAttribute("src","./images/"+"2.jpg")
document.getElementById("ar").appendChild(fi)

var h=document.createElement("h2")
h.innerHTML="Indonectetus facilis leo nibh"
document.getElementById("hh").appendChild(h)

var p1=document.createElement("p")
p1.innerHTML="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "
document.getElementById("pp").appendChild(p1)

var re=document.getElementsByClassName("more")
for(i=0;i<re.length;i++){
    var ree=document.createElement("reee")
    ree.href="#"
    ree.innerHTML="Read More &raquo;"
    re[i].appendChild(ree)
}

var re=document.getElementsByClassName("title")
for(i=0;i<re.length;i++){
    var ree=document.createElement("reee")
    ree.innerHTML="Link Block"
    re[i].appendChild(ree)
}
