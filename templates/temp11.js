
var links=["link1","link2","link3","link4","link5"]
for(i=0;i<links.length;i++){
    var list =document.createElement("li")
    var anchor=document.createElement("a")
    anchor.innerHTML=links[i]



    list.appendChild(anchor)
      document.getElementById("demo").appendChild(list)
      console.log(list)
}

