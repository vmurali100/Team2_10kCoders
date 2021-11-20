
/*var movieDetails=["tel-comics","tel-movie","tel-director","tel-producers","tel-actors"]
for(i=0;i<movieDetails.length;i++){
    var list=document.createElement("li")
    var anchor=document.createElement("a")
    anchor.innerHTML=movieDetails[i]



    list.appendChild(anchor)
      document.getElementById("demo").appendChild(list)
      console.log(list)
}*/
var movieDetails=["tel-comics","tel-movie","tel-director","tel-producers","tel-actors"]
for(i=0;i=movieDetails.length;i++){
  //step1: create an element
  var links = document.createElement("li")
  //step2: adding text to an element
  //step3: apphendchild to an element
  document.getElementById("demo").appendChild(links)
}
