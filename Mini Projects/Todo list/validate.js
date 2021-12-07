function validate() {
  if (document.getElementById("todoCreate").value == "") {
    document.getElementById("addbtn").setAttribute("disabled", true);
  } else {
    document.getElementById("addbtn").removeAttribute("disabled");
  }
  if (document.getElementById("todoupdate").value == "") {
    document.getElementById("updatebtn").setAttribute("disabled", true);
  } else {
    document.getElementById("updatebtn").removeAttribute("disabled");
  }
}
