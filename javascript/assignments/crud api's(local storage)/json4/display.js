function displayUsers() {
    data = JSON.parse(localStorage.getItem("json4"))
    document.querySelector("tbody").innerHTML = ""
    data.forEach((person, i) => {
        var myTr = document.createElement('tr');
        var indextd = document.createElement('td');
        indextd.innerHTML = i + 1;
        myTr.appendChild(indextd);
        for (a in person) {
            var myTd = document.createElement('td');
            myTd.innerHTML = person[a];
            myTr.appendChild(myTd);
        }
        var edittd = document.createElement('td');
        var editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'btn btn-warning');
        editBtn.setAttribute('onclick', 'edit(' + i + ')');
        editBtn.innerHTML = 'Edit';
        edittd.appendChild(editBtn);
        myTr.appendChild(edittd);

        var deletetd = document.createElement('td');
        var deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('class', 'btn btn-danger');
        deleteBtn.setAttribute('onclick', 'deleteuser(' + i + ')');
        deleteBtn.innerHTML = 'Delete';
        deletetd.appendChild(deleteBtn);
        myTr.appendChild(deletetd);

        document.querySelector('tbody').appendChild(myTr);
    })
}