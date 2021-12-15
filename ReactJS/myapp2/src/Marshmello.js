import React from "react";
export default function Marshmello(){
return <button type="button" onClick={neow()} >BUTTON</button>

}

function neow(){
let myimg = document.createElement("p");
myimg.innerHTML =  "hero occhadroi!!!!";
document.getElementById("root").appendChild(myimg)
}