
// ===================== HEADING ===========================
// var doc = document.getElementById("hgroup")
var h1 = document.createElement("h1")
var anchor = document.createElement("a")
anchor.innerHTML = "FlipCart"
var h2 = document.createElement("h2")
h2.innerHTML = "Easy Shopping"
h1.appendChild(anchor)
document.getElementById("hgroup").appendChild(h1)
document.getElementById("hgroup").appendChild(h2)


// ============================ NAVIGATION BAR ====================

var spaceDetails= ["Profile", "Cart", "WishList", "Favorites", "Wallet"]
for(i=0;i<spaceDetails.length;i++){
    var list = document.createElement("li");                  //step - 1
    var anchor = document.createElement("a");
    anchor.innerHTML = spaceDetails[i]                        //step - 2
    list.appendChild(anchor)                                  //step - 3
    document.getElementById("demo").appendChild(list)
}



// ================================= IMAGES ===========================

var allElements = document.getElementsByClassName("myImage")
var onlineImg = [
    "https://bytefixx.com/wp-content/uploads/2014/04/sales1.jpg",
    "https://th.bing.com/th/id/OIP.IseyU-JoKGcyPL1eOHNZ_QHaEd?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/OIP.h41yGiuX6ho5SuQurgB4DAHaFj?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/R.40f2ba93fadcc25e78fc707b027579c7?rik=HjZPobuDuuMRDA&riu=http%3a%2f%2fsmashingtops.com%2fwp-content%2fuploads%2f2012%2f10%2fFlight-Sim-PC-Games.jpg&ehk=hN6LyG4Jtxi6Jmjl0LHD8ehxzlcFAqFDLT0cBAT%2bBPg%3d&risl=&pid=ImgRaw&r=0"
]
    
for(i=0;i<allElements.length;i++){
    console.log(allElements[i])
    var imgElement=document.createElement("img")
    imgElement.style.width="100%"
    imgElement.style.height="315px"

    var imgNum=Number(i)+1
    imgElement.setAttribute("src",onlineImg[i])
    allElements[i].appendChild(imgElement)
}