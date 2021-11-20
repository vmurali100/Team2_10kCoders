// Getting Data from localStorage

function displayPersons() {
  document.querySelector('tbody').innerHTML = '';
  persons.forEach((person, i) => {
    var myTr = document.createElement('tr');
    var indextd = document.createElement('td');
    indextd.innerHTML = i + 1;
    myTr.appendChild(indextd);
    for (a in person) {
      var myTd = document.createElement('td');
      myTd.innerHTML = person[a];
      myTr.appendChild(myTd);
    }

    // Edit td
    var edittd = document.createElement('td');
    var editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'btn btn-warning');
    editBtn.setAttribute('onclick', 'editPerson(' + i + ')');
    editBtn.innerHTML = 'Edit';
    edittd.appendChild(editBtn);
    myTr.appendChild(edittd);

    // Delete Td
    var deletetd = document.createElement('td');
    var deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'btn btn-danger');
    deleteBtn.setAttribute('onclick', 'deletePerson(' + i + ')');
    deleteBtn.innerHTML = 'Delete';
    deletetd.appendChild(deleteBtn);
    myTr.appendChild(deletetd);

    document.querySelector('tbody').appendChild(myTr);
  });
}

displayPersons(); // this will display the users by defailt
