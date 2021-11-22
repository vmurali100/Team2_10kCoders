function displayPersons() {
  document.querySelector('tbody').innerHTML = '';
  persons.forEach((person) => {
    var myTr = document.createElement('tr');
    for (a in person) {
      var myTd = document.createElement('td');
      myTd.innerHTML = person[a];
      myTr.appendChild(myTd);
    }
    document.querySelector('tbody').appendChild(myTr);
  });
} 
