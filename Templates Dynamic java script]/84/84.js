var title_a = document.createElement("a");
title_a.innerHTML = "PUSHPA";
title_a.style.width= "960px";
title_a.style.textAlign= "center";
var title_h1 = document.createElement("h1");
title_h1.appendChild(title_a);
document.getElementById("title").appendChild(title_h1);

// title h2
var title_h2 = document.createElement("h2");
title_h2.innerHTML = "Taggedhe Lea";
document.getElementById("title").appendChild(title_h2);

// Form searchbox and button
var fieldset = document.createElement("fieldset");
var textbox = document.createElement("input");
var submit = document.createElement("input");
// ul
var familyDetails = ["HERO", "HEROINE", "MUSIC", "DIRECTOR", "PRODUCER"]
for (i = 0; i < familyDetails.length; i++) {
    var li = document.createElement("li");
    var anchor = document.createElement("a");
    anchor.innerHTML = familyDetails[i]
    li.appendChild(anchor)
    document.getElementById("demo").appendChild(li)
}


var allElements=document.getElementsByClassName("myImage");
for(i=0;i<allElements.length;i++){
    // console.log(allElements[i])
var imgElement = document.createElement("img")
var imgNum = Number(i)+1
imgElement.setAttribute("src","./images/pushpa/"+imgNum+".jpg");
imgElement.style.width= "100%";
imgElement.style.height ="250px"
allElements[i].prepend(imgElement);
}

