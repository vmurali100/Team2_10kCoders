ar users = data;
var person = {
    fname: "",
    lname: ""

}

function display(data) {
    users = data;
    document.querySelector('tbody').innerHTML = "";
    users.forEach((person, i) => {
        var myTr = document.createElement("tr")
        var myTd = document.createElement("td")
        myTd.innerHTML = i + 1
        myTr.appendChild(myTd)
        for (a in person) {
            var myTd = document.createElement("td")
            myTd.innerHTML = person[a]
            myTr.appendChild(myTd)
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
        document.querySelector('tbody').appendChild(myTr)
    });
}