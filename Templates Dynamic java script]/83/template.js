// <!---_____--

var movieDetails = ["Hero", "Heroine","Villan","Director","Producer"]
for(i=0;i<movieDetails.length;i++){
    var li=document.createElement("li");
    var anchor=document.createElement("a");
    anchor.innerHTML=movieDetails[i]
    li.appendChild(anchor)
    document.getElementById("demo").appendChild(li)
}

document.getElementById("myBanner")
.setAttribute("src","https://wallpaperaccess.com/full/2514219.jpg")
document.getElementById("myBanner").style.cssText=
                                                         `
                                                           width:100%;
                                                           height:300px;

                                                         `
