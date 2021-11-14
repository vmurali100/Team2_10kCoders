var header1 = document.createElement("h1")
// console.log(header1)
var anc = document.createElement("a")
// header1.innerHTML = "Basic87"

anc.innerHTML = "Basic87"
// header1.appendChild(anc)
header1.append(anc)
document.getElementById("hgroup").append(header1)




var listElements = ["Narendra", "surendra", "srikanth", "varma", "kalyan"]
// var i = 0;
for (; i < listElements.length;) {

    //Step:1 Create Element
    var li = document.createElement("li")
    var anchor = document.createElement("a")
    // Step 2 : Adding a Text to Element
    anchor.innerHTML = listElements[i]
    // Step 3 : Appending the Element to Body Section
    li.appendChild(anchor)
    document.getElementById("ul_dom").appendChild(li)
    // i++;
}