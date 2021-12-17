var index;
function editPerson(i) {
    index = i;
    for (a in getAllUsers[i]) {
        document.getElementById(a).value = getAllUsers[i][a];
    }

}