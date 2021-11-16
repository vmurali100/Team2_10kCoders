var allElements = document.getElementsByClassName("myImage");
var onlineImages = [
    "https://files.prokerala.com/movies/pics/300x360/1st-look-poster-108582.jpg",
    "https://southfans.com/wp-content/uploads/2020/06/Alludu-Adhurs-Movie-poster.jpg",
    "https://i.pinimg.com/474x/d0/fb/12/d0fb125cdcf660401ce51d8d7bf2aa27.jpg",
    "http://www.stunmore.com/uploads/9/0/2/4/90246451/editor/chavu-kaburu-challaga-telugu-movie-poster-2020.jpg?1590907335"
]
for (i = 0; i < allElements.length; i++) {
    console.log(allElements[i])
    var imgElement = document.createElement("img")
    imgElement.style.width = "100%"
    var imgNum = Number(i) + 1
    // imgElement.setAttribute("src","./images/"+imgNum+".jpeg")
    imgElement.setAttribute("src", onlineImages[i])
    allElements[i].appendChild(imgElement)
}

document.getElementById("myBanner")
    .setAttribute("src", "https://static-cse.canva.com/blob/571910/PerfectWebBannerAdfeaturedimage1.jpg")

document.getElementById("myBanner").style.cssText = `
                                                        width:100%;
                                                        height:300px;
                                                        `;
// document.getElementById("myBanner")
// .style.width="100%";


// document.getElementById("myBanner")
// .style.height="250px";