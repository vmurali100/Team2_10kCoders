function display()
{
    //clearing table everytime;
document.querySelector("tbody").innerHTML = "";

//displayin data in table
users.forEach((user, i) => {
  var tr = document.createElement("tr");
  var slno = document.createElement("td");
  tr.appendChild(slno);

  slno.innerHTML = i + 1;
  for (key in user) {
    var td = document.createElement("td");
    td.innerHTML = user[key];
    tr.append(td);
  }

  var edit = document.createElement("td");
  var editbtn = document.createElement("button");
  editbtn.innerHTML = "Edit";
  editbtn.setAttribute("class","btn btn-warning");
  editbtn.setAttribute("onclick","edituser("+i+")");
  edit.appendChild(editbtn);
  tr.appendChild(edit);

  var del = document.createElement("td");
  var delbtn = document.createElement("button");
  delbtn.innerHTML = "Delete";
  delbtn.setAttribute("class","btn btn-danger");
  delbtn.setAttribute("onclick","deletePerson("+i+")");
  del.appendChild(delbtn);
  tr.appendChild(del);

  document.querySelector("tbody").append(tr);
});
}
display();