
// ===================== HEADING ===========================
// var doc = document.getElementById("hgroup")
var h1 = document.createElement("h1")
var anchor = document.createElement("a")
anchor.innerHTML = "Tour My India "
var h2 = document.createElement("h2")
h2.innerHTML = "Fly with your favorite Places"
h1.appendChild(anchor)
document.getElementById("hgroup").appendChild(h1)
document.getElementById("hgroup").appendChild(h2)


// ============================ NAVIGATION BAR ====================

var spaceDetails = ["Destination", "Package", "Adventure", "Trekking", "Weekend"]
for (i = 0; i < spaceDetails.length; i++) {
    var list = document.createElement("li");                  //step - 1
    var anchor = document.createElement("a");
    anchor.innerHTML = spaceDetails[i]                        //step - 2
    list.appendChild(anchor)                                  //step - 3
    document.getElementById("demo").appendChild(list)
}


// ================================= IMAGES ===========================

var quarter = document.getElementsByClassName("one_quarter")
var images = [
    "https://www.planetware.com/photos-large/IND/india-top-attractions-taj-mahal.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUf91Xafqa2g9cGc3vDrHDpjN0Fxm0szIvIQ&usqp=CAU",
    "https://static2.tripoto.com/media/filter/tst/img/316432/TripDocument/1486569813_shimla_tour_1.jpg",
    "https://toib.b-cdn.net/wp-content/uploads/2017/04/munnar.jpg"
]
for (i = 0; i < quarter.length; i++) {
    console.log(quarter[i])
    var img = document.createElement("img")
    img.style.width="100%" 
    imgElement.style.height="315px"
    var imgNum=Number(i)+1
    img.setAttribute("src",images[i])
    quarter[i].appendChild(img)
    // document.getElementsByClassName("one_quarter").appendChild(img)
}