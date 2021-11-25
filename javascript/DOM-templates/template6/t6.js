var head = document.createElement("h1")
var anchor = document.createElement("a")
anchor.innerHTML = "template6"
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

var natureImages = ["earth", "rivers", "lakes", "plants", "trees"," plants","animals","animals","animals","animals","animals"]

for (i = 0; i < natureImages.length; i++) {
    var li = document.createElement("li");
    var anchor = document.createElement("a")
    anchor.innerHTML = natureImages[i]
    li.appendChild(anchor)
    document.getElementById("demo1").appendChild(li)
}

var article=document.getElementsByClassName("fig")
for(i=0;i<article.length;i++){
    var figg=document.createElement("img")
    figg.style.width="215px"
    figg.style.height="315px"
    var imNum=Number(i)+1
    figg.setAttribute("src","./images/"+imNum+".jpg")
    article[i].appendChild(figg)
}
var ar=document.getElementsByClassName("fi")
for(i=0;i<ar.length;i++){
  var r=document.createElement("rr")  
  r.innerHTML="Image Caption Here"
  ar[i].appendChild(r)

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

var sh=document.createElement("h2")
sh.innerHTML="Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed. Facilispede estibulum nulla orna nisl velit elit ac aliquat non tincidunt. Namjusto cras urna urnaretra lor urna neque sed quis orci nulla laoremut vitae doloreet condimentumst."
document.getElementById("shout").appendChild(sh)

var im=document.getElementsByClassName("f1")
for(i=0;i<im.length;i++){
    var imm=document.createElement("img")
    imm.style.width="180px"
    imm.style.height="150px"
    imNum=Number(i)+1
    imm.setAttribute("src","./images/"+imNum+".jpg")
    im[i].appendChild(imm)
}

var ff=document.getElementsByClassName("h3")
for(i=0;i<ff.length;i++){
    var fh=document.createElement("h2")
    fh.innerHTML="Indonectetus facilis leo nibh"
    ff[i].appendChild(fh)
}

var fff=document.getElementsByClassName("p2")
for(i=0;i<ff.length;i++){
    var fp=document.createElement("p")
    fp.innerHTML="is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by ac"
    fff[i].appendChild(fp)
}

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
    ree.innerHTML="Categories"
    re[i].appendChild(ree)
}
