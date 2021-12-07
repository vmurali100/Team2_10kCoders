function validate() {
  if (document.getElementById("notesCreate").value == "") {
    document.getElementById("addbtn").setAttribute("disabled", true);
  } 
  else if (document.getElementById("notesCreate").value !== "")
  {
    document.getElementById("addbtn").removeAttribute("disabled");
  }
  else if (document.getElementById("notesUpdate").value == "") {
    document.getElementById("updatebtn").setAttribute("disabled", true);
  } 
  else if (document.getElementById("notesUpdate").value !== ""){
    document.getElementById("updatebtn").removeAttribute("disabled");
  }
}
