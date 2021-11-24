var person = {
  fname: '',
  lname: '',
  email: '',
};

var persons = JSON.parse(localStorage.getItem('persons'));
if (persons==null){
  var persons =[];
}
function createPerson() {
  for (a in person) {
    person[a] = document.getElementById(a).value;
  }
  persons.push({ ...person });
  var convertedPersons = JSON.stringify(persons);
  localStorage.setItem('persons', convertedPersons);
  clear();
  displayPersons();
  validate();
}
