function updatePerson() {
  for (a in person) {
    person[a] = document.getElementById(a).value;
  }
  persons[index] = { ...person };
  displayPersons();
  localStorage.setItem('persons', JSON.stringify(persons));
  document.getElementById('update').style.display = 'none';
  document.getElementById('submit').style.display = 'block';
  clear();
}
