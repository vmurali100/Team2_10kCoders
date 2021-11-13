
// var movieDetails = ["Tel - Comics", "Tel - Movies", "Tel - Director", "Tel - Procucer", "Tel - Actors"]
var movieDetails = ["Tam - Comics", "Tam - Movies", "Tam - Director", "Tam - Procucer", "Tam - Actors"]
for(i=0;i<movieDetails.length;i++){
    // Step 1:
    var li = document.createElement("li");
    var anchor = document.createElement("a");
    // Step 2:
    anchor.innerHTML = movieDetails[i]
    // Step 3:
    li.appendChild(anchor)
    document.getElementById("demo").appendChild(li)
}