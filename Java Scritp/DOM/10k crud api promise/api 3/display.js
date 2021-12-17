function display() {
    document.querySelector('tbody').innerHTML = "";
    getAllUsers.forEach((person, i) => {
        var myTr = document.createElement("tr")
        for (a in person) {
            var name = []
            if (a !== "address" && a !== "__v" && a !== "name") {
                var myTd = document.createElement('td');
                myTd.innerHTML = person[a];
                myTr.appendChild(myTd);
            }
            else if (a == "name") {
                var myTd = document.createElement('td');
                for (k in person[a]) {
                    var na = person[a][k] + " "
                    name.push(na)
                }
                myTd.innerHTML = name.join(" ")
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
        document.querySelector('tbody').appendChild(myTr)
    });
}
// display(users);