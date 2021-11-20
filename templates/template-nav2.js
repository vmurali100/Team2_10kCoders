
var movieDetails=["tel-comics","tel-movie","tel-director","tel-producers","tel-actors"]
for(i=0;i<movieDetails.length;i++){
  // console.log(movieDetails[i])
    var list=document.createElement("li")
    var anchor=document.createElement("a")
    anchor.innerHTML=movieDetails[i]



    list.appendChild(anchor)
      document.getElementById("demo").appendChild(list)
      console.log(list)
}
var allElements =document.getElementsByClassName("myImage")
for(i=0;i<allElements.length;i++){
    console.log(allElements[i])
    var addingImages =document.createElement("img")
  addingImages.setAttribute("src","./1.png")
    allElements[i].appendChild(addingImages)
}
