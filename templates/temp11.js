var externalLinks=["lnik1","link2","link3","link4","link5",]
for(i=0;i=externalLinks.length;i++){
  //step1: creating an element
  var links = document.createElement("li")
  //step2: adding text to an element

  //step3: appendchild to the element
  document.getElementById("demo").appendChild(links)
}