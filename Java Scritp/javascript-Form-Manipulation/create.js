var person = {
  fname: '',
  lname: '',
  email: '',
}; 

var persons = [];

function createPerson() {
  for (a in person) {
    person[a] = document.getElementById(a).value;
  }

  // Create a copy of person

  persons.push({ ...person });

  clear();
  displayPersons(); 
  validate();
}
