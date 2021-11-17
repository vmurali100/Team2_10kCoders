
var movieDetails=["tel-comics","tel-movie","tel-director","tel-producers","tel-actors"]
for(i=0;i<movieDetails.length;i++){
    //step 1 to create element
    var list = document.createElement("li")
    var anchor = document.createElement("a")
    list.innerHTML=movieDetails[i                   ]

list.appendChild(anchor)
    document.getElementById("demo").appendChild(list)
}