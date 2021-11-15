
// ===================== HEADING ===========================
// var doc = document.getElementById("hgroup")
var h1 = document.createElement("h1")
var anchor = document.createElement("a")
anchor.innerHTML = "Developer School"
var h2 = document.createElement("h2")
h2.innerHTML = "Join and Become a Pro"
h1.appendChild(anchor)
document.getElementById("hgroup").appendChild(h1)
document.getElementById("hgroup").appendChild(h2)


// ============================ NAVIGATION BAR ====================

var spaceDetails= ["Login", "Courses", "Placements", "Team", "About"]
for(i=0;i<spaceDetails.length;i++){
    var list = document.createElement("li");                  //step - 1
    var anchor = document.createElement("a");
    anchor.innerHTML = spaceDetails[i]                        //step - 2
    list.appendChild(anchor)                                  //step - 3
    document.getElementById("demo").appendChild(list)
}

// =============================== BANNER ============================

document.getElementById("myBanner").setAttribute("src","https://binaryinformatics.com/wp-content/uploads/2019/01/MERN-Stack-Development-and-Consulting-Services.jpg")


// ================================= IMAGES ===========================

var allElements = document.getElementsByClassName("myImage")
var onlineImg = [
    "https://cdnp2.stackassets.com/475a6b55d6bc1aae05f0a7fec46160aa19840ddd/store/opt/596/298/13c9844007bf7b97400fd18adbf317fd3036e4ff0e1216df48bf2c5e6e5a/sale_9721_primary_image_wide.jpg",
    "https://www.kosmiktechnologies.com/admin/assets/uploads/PYTHON-FULL-STACK-DEVELOPER-COURSE.jpg",
    "http://www.pureecosoft.com/public/img/training/download.jpg",
    "https://www.subcodevs.com/wp-content/uploads/2020/02/Full-stack-developer.png"
]
for(i=0;i<allElements.length;i++){
    console.log(allElements[i])
    var imgElement=document.createElement("img")
    imgElement.style.width="100%"
    imgElement.style.height="320px"

    var imgNum=Number(i)+1
    imgElement.setAttribute("src",onlineImg[i])
    allElements[i].appendChild(imgElement)
}

// =================== TITLE ================

var spaceDetails= ["Mongo Db", "Express", "Angular", "Node js", "API"]
for(i=0;i<spaceDetails.length;i++){
    var list = document.createElement("li");                  //step - 1
    var anchor = document.createElement("a");
    anchor.innerHTML = spaceDetails[i]                        //step - 2
    list.appendChild(anchor)                                  //step - 3
    document.getElementById("demo1").appendChild(list)
}

var spaceDetails= ["Mongo Db", "Express", "Angular", "Node js", "API"]
for(i=0;i<spaceDetails.length;i++){
    var list = document.createElement("li");                  //step - 1
    var anchor = document.createElement("a");
    anchor.innerHTML = spaceDetails[i]                        //step - 2
    list.appendChild(anchor)                                  //step - 3
    document.getElementById("demo2").appendChild(list)
}
var spaceDetails= ["Php", "My spl", "AWS", "Python", "SPA"]
for(i=0;i<spaceDetails.length;i++){
    var list = document.createElement("li");                  //step - 1
    var anchor = document.createElement("a");
    anchor.innerHTML = spaceDetails[i]                        //step - 2
    list.appendChild(anchor)                                  //step - 3
    document.getElementById("demo3").appendChild(list)
}
var spaceDetails= ["Oracle", "MongoDB", "Java", "DS", "Mokito"]
for(i=0;i<spaceDetails.length;i++){
    var list = document.createElement("li");                  //step - 1
    var anchor = document.createElement("a");
    anchor.innerHTML = spaceDetails[i]                        //step - 2
    list.appendChild(anchor)                                  //step - 3
    document.getElementById("demo4").appendChild(list)
}