var head = document.createElement("h1")
var anchor = document.createElement("a")
anchor.innerHTML = "template4"
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

var fig=document.createElement("img")
fig.style.width="630px"
fig.style.height="300px"
fig.setAttribute("src","./images/"+"1.jpg")
document.getElementById("fig").appendChild(fig)

var h=document.createElement("h2")
h.innerHTML="Eu justo augue estas"
document.getElementById("hh").appendChild(h)

var p1=document.createElement("p")
p1.innerHTML="Nullamlacus dui ipsum conseque loborttis non euisque morbi penas dapibulum orna. Urnaultrices quis curabitur phasellentesque congue magnis vestibulum quismodo nulla et feugiat adipiscinia pellentum leo."
document.getElementById("pp").appendChild(p1)

var rea=document.getElementsByClassName("m")
for(i=0;i<rea.length;i++){
var re=document.createElement("r")
re.href="#"
re.innerHTML="Read More &raquo"
rea[i].appendChild(re)
}

var article=document.getElementsByClassName("one_third")
for(i=0;i<article.length;i++){
    var hhh=document.createElement("h2")
    hhh.innerHTML="Lorum ipsum dolor"
    article[i].appendChild(hhh)

    var figg=document.createElement("img")
    figg.style.width="80px"
    figg.style.height="80px"
    var imNum=Number(i)+1
    figg.setAttribute("src","./images/"+imNum+".jpg")
    article[i].appendChild(figg)

   var pp=document.createElement("p") 
   pp.innerHTML="Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed. Facilispede estibulum nulla orna nisl velit elit ac aliquat non tincidunt. Namjusto cras urna urnaretra lor urna neque sed quis orci nulla. Laoremut vitae doloreet condimentumst phasellentes dolor ut a ipsum id consectetus. Inpede cumst vitae ris tellentesque fring intesquet."
   article[i].appendChild(pp)
}

var re=document.getElementsByClassName("one_third")
for(i=0;i<re.length;i++){
    var ree=document.createElement("reee")
    ree.href="#"
    ree.innerHTML="Read More &raquo;"
    re[i].appendChild(ree)
}
var article=document.getElementsByClassName("one_quarter")
for(i=0;i<article.length;i++){
    var figg=document.createElement("img")
    figg.style.width="215px"
    figg.style.height="100px"
    var imNum=Number(i)+1
    figg.setAttribute("src","./images/"+imNum+".jpg")
    article[i].appendChild(figg)

    var hhh=document.createElement("h2")
    hhh.innerHTML="Indonectetus facilis"
    article[i].appendChild(hhh)

 var pp=document.createElement("p") 
   pp.innerHTML="Nullamlacus dui ipsum conseque loborttis non euisque morbi penas dapibulum orna."
    article[i].appendChild(pp)
}

var re=document.getElementsByClassName("one_quarter")
for(i=0;i<re.length;i++){
    var ree=document.createElement("reee")
    ree.href="#"
    ree.innerHTML="Read More &raquo;"
    re[i].appendChild(ree)
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