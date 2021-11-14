
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
for (i = o; i < spaceDetails.length; i++) {
    var list = document.createElement("li");
    // var anchor = document.createElement("a");
    // anchor.innerHTML = nav[i]
    // li.appendChild(anchor)
    document.getElementById("demo").appendChild(list)
}
