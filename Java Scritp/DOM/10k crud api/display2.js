var person = {
    fname: '',
    lname: '',
    email: '',
};
// var persons = []

var persons = JSON.parse(localStorage.getItem('persons'));
if (persons == null) {
    var persons = [];
}
function displayPersons() {
    console.log("vacha ra")
    // document.querySelector('tbody').innerHTML = '';
    console.log(persons)
    persons.forEach((person, i) => {
        var myTr = document.createElement('tr');
        var indextd = document.createElement('td');
        indextd.innerHTML = i + 1;
        myTr.appendChild(indextd);
        for (a in person) {
            if (a !== "address" && a !== "id" && a !== "__v" && a !== "name") {
                var myTd = document.createElement('td');
                myTd.innerHTML = person[a];
                myTr.appendChild(myTd);
            }
            else if (a === "name") {
                var myTd = document.createElement('td');
                myTd.innerHTML = person[a].firstname + " " + person[a].lastname;
                myTr.appendChild(myTd);
            }

        }
        var edittd = document.createElement('td');
        var editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'btn btn-warning');
        editBtn.setAttribute('onclick', 'editPerson(' + i + ')');
        editBtn.innerHTML = 'Edit';
        edittd.appendChild(editBtn);
        myTr.appendChild(edittd);

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

// displayPersons(); // this will display the users by defailt
