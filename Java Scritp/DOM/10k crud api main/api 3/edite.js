var index;
function editPerson(i) {
    index = i;
    for (a in person) {
        if (a !== "name") {
            document.getElementById(a).value = users[i][a];
        } else if (a == "name") {
            for (k in person[a]) {
                document.getElementById(a).value = users[i][a][k]

            }
        }
    }

}