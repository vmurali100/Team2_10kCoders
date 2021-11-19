
var movieDetails=["tel-comics","tel-movie","tel-director","tel-producers","tel-actors"]
for(i=0;i<movieDetails.length;i++){
    var list=document.createElement("li")
    var anchor=document.createElement("a")
    anchor.innerHTML=movieDetails[i]



    list.appendChild(anchor)
      document.getElementById("demo").appendChild(list)
      console.log(list)
}
