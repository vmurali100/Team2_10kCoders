function display() {
    allUsers.forEach((person, i) => {
        var myTr = document.createElement("tr")
        for (a in person) {
            var myTd = document.createElement("td")
            if (a !== "address" && a !== "company" && a !== "website") {
                myTd.innerHTML = person[a];
            }
            // else if (a == "address") {
            //     for (k in person[a]) {
            //         if (k !== "geo") {
            //             var address = k + ":&nbsp&nbsp&nbsp&nbsp" + person[a][k] + "<br>"

            //             add.push(address)

            //         }
            //         else {
            //             for (j in person[a][k]) {
            //                 add.push(j + ":&nbsp&nbsp&nbsp&nbsp" + person[a][k][j])
            //             }
            //         }

            //         myTd.innerHTML = add.join(" ")
            //     }
            // } else if (a == "company") {
            //     for (n in person[a]) {
            //         var company = n + ":&nbsp&nbsp&nbsp&nbsp" + person[a][n] + "<br>"
            //         com.push(company)
            //     }
            //     myTd.innerHTML = com.join(" ")
            // }
            // else if (a === "website") {
            //     var myTd = document.createElement('td');
            //     var myAnchor = document.createElement('a')
            //     myAnchor.setAttribute("href", person[a])
            //     myAnchor.target = "_blank"
            //     myAnchor.style.textDecoration = "none"
            //     myAnchor.innerHTML = person[a]
            //     myTd.appendChild(myAnchor)
            //     myTr.appendChild(myTd);
            // }

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
// display(users);