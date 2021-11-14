
// ===================== HEADING ===========================
// var doc = document.getElementById("hgroup")
var h1 = document.createElement("h1")
var anchor = document.createElement("a")
anchor.innerHTML = "Space X "
var h2 = document.createElement("h2")
h2.innerHTML = "AeroSpace Company"
h1.appendChild(anchor)
document.getElementById("hgroup").appendChild(h1)
document.getElementById("hgroup").appendChild(h2)


// ============================ NAVIGATION BAR ====================

var spaceDetails= ["Falcon", "Dragon", "Starship", "Rideshare", "Human Spacelight"]
for(i=0;i<spaceDetails.length;i++){
    var list = document.createElement("li");                  //step - 1
    var anchor = document.createElement("a");
    anchor.innerHTML = spaceDetails[i]                        //step - 2
    list.appendChild(anchor)                                  //step - 3
    document.getElementById("demo").appendChild(list)
}

// =============================== BANNER ============================

document.getElementById("myBanner").setAttribute("src","https://freight.cargo.site/t/original/i/d7d59958ac7c19813acf8b0f2ad4dbf1329c602086870e9faa3d380acbc12481/frame4_1.jpg")


