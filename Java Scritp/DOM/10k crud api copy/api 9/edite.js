var index;
function editPerson(i) {
    index = i;
    for (a in person) {
        if (a !== "address" && a !== "company") {
            document.getElementById(a).value  = users[i][a];
        } else if (a == "address") {

        }
    }
}
