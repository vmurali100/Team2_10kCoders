
// nav bar added succefully 
 for (i = 0 ; i <4 ; i++){
     var newarey = ["HOME" ,"CHARTS" ,"ABOUT US", "CONTACT"]
    var a = document.getElementById("lists");
    var  newElement = document.createElement("li") ;
    // newElement.appendChild(h2);
    newElement.innerHTML = newarey[i] ;
    newElement.style.color = "red"
    a.appendChild(newElement);
}

//  new image added from DOM manupulation
var newBigImage = document.getElementById("big_image")

var newImg = document.createElement("img");

newImg.setAttribute("src" , "./download.jpeg");

document.getElementById("big_image").appendChild(newImg);

// adding new small images 
// for (i = 0 ; i <4 ; i++){
    var blockOfImages = document.getElementsByClassName("smallBlock");

 for (let i = 0; i < blockOfImages.length; i++) {
    
     console.log(blockOfImages[i])
    var smlImg = document.createElement("img");

 smlImg.setAttribute("src" , "./small.jpeg");


 blockOfImages[i].appendChild(smlImg);
 }
// adding new fig caption in images row 
for (let i = 0; i < blockOfImages.length; i++) {
    
    console.log(blockOfImages[i])
   var newCaption  = document.createElement("figcaption");

 newCaption.innerHTML = ("Tim Berling")

blockOfImages[i].appendChild(newCaption);
}

// adding new paragraph to the images row 
for (let i = 0; i < blockOfImages.length; i++) {
    
    console.log(blockOfImages[i])
   var newPara  = document.createElement("p");

   newPara.innerHTML = (" Tim Bergling, known professionally as Avicii, was a Swedish DJ, remixer, record producer, musician, and songwriter. At the age of 16, Bergling began posting his remixes on electronic music forums, which led to his first record deal.")

blockOfImages[i].appendChild(newPara);
}

// adding anchor tag to the images row 

for (let i = 0; i < blockOfImages.length; i++) {
    
    console.log(blockOfImages[i])
   var newanchor  = document.createElement("a");

   newanchor.innerHTML = ("Read More>>>");
   newanchor.setAttribute("href" , "#");

blockOfImages[i].appendChild( newanchor);
}







