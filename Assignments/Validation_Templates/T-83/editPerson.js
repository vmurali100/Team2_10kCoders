var index;
function editPerson(i) {
  index = i;
  for (a in person) {
    document.getElementById(a).value = persons[i][a];
  }

  document.getElementById('update').style.display = 'block';
  document.getElementById('submit').style.display = 'none';
}
