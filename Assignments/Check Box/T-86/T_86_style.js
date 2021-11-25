
// ===================== HEADING ===========================
// var doc = document.getElementById("hgroup")
var h1 = document.createElement("h1")
var anchor = document.createElement("a")
anchor.innerHTML = "10000 Coders"
var h2 = document.createElement("h2")
h2.innerHTML = "Be Free To Learn"
h1.appendChild(anchor)
document.getElementById("hgroup").appendChild(h1)
document.getElementById("hgroup").appendChild(h2)


// ============================ NAVIGATION BAR ====================

// var spaceDetails= ["Home", "Curriculum", "Team", "Admission", "User Details"]
// for(i=0;i<spaceDetails.length;i++){
//     var list = document.createElement("li");                  //step - 1
//     var anchor = document.createElement("a");
//     anchor.innerHTML = spaceDetails[i]                        //step - 2
//     list.appendChild(anchor)                                  //step - 3
//     document.getElementById("demo").appendChild(list)
// }

// =============================== BANNER ============================

document.getElementById("myBanner").setAttribute("src","https://avatars.githubusercontent.com/u/11070359?v=4")


// ================================= IMAGES ===========================

var allElements = document.getElementsByClassName("myImage")
var onlineImg = [
    "https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png",
    "https://www.cloudsavvyit.com/p/uploads/2021/07/f5932bc2.jpg?width=1198&trim=1,1&bg-color=000&pad=1,1",
    "https://www.cloudsavvyit.com/p/uploads/2019/07/2350564e.png?width=1198&trim=1,1&bg-color=000&pad=1,1",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/220px-Bootstrap_logo.svg.png"
   
]
for(i=0;i<allElements.length;i++){
    console.log(allElements[i])
    var imgElement=document.createElement("img")
    imgElement.style.width="215px"
    imgElement.style.height="100px"

    var imgNum=Number(i)+1
    imgElement.setAttribute("src",onlineImg[i])
    allElements[i].appendChild(imgElement)
}