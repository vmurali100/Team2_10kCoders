
// ===================== HEADING ===========================
// var doc = document.getElementById("hgroup")
var h1 = document.createElement("h1")
var anchor = document.createElement("a")
anchor.innerHTML = "Movie Dada "
var h2 = document.createElement("h2")
h2.innerHTML = "Free to Watch"
h1.appendChild(anchor)
document.getElementById("hgroup").appendChild(h1)
document.getElementById("hgroup").appendChild(h2)


// ============================ NAVIGATION BAR ====================

var spaceDetails= ["Movies", "Tollywood", "Bollywood", "Hollywood", "Kollywood"]
for(i=0;i<spaceDetails.length;i++){
    var list = document.createElement("li");                  //step - 1
    var anchor = document.createElement("a");
    anchor.innerHTML = spaceDetails[i]                        //step - 2
    list.appendChild(anchor)                                  //step - 3
    document.getElementById("demo").appendChild(list)
}

// =============================== BANNER ============================

document.getElementById("myBanner").setAttribute("src","https://www.thenewsminute.com/sites/default/files/Shyam%20singha%20roy_%20250221_1200_poster.jpg")


// ================================= IMAGES ===========================

var allElements = document.getElementsByClassName("myImage")
var onlineImg = [
    "https://imgcdn.ragalahari.com/mar2021/designs/acharya-posters/acharya-posters1t.jpg",
    "https://i.pinimg.com/736x/c0/5b/92/c05b9232e2735febae8272e159fde82c.jpg",
    "https://moviegalleri.net/wp-content/gallery/telugu-diwali-posters-2020/Most-Elgible-Bachelor-Telugu-Movie-Diwali-Wishes-Posters.jpg",
    "https://www.thehindu.com/entertainment/movies/bmr65d/article23977446.ece/alternates/FREE_435/hym25Rangasthalam"
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