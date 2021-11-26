var index;
function editPerson(i) {
    index = i;
    for (a in person) {
        document.getElementById(a).value = users[i][a];
    }

} 