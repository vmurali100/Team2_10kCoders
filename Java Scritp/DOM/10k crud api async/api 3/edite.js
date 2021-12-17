var index = i;
function editPerson(i) {
    index = i;
    for (a in getAllUsers[i]) {
        if (a !== "name" && a !== "address" && a !== "__v") {
            document.getElementById(a).value = getAllUsers[i][a];
        }
        else if (a == "name") {
            for (k in getAllUsers[i][a]) {
                document.getElementById(k).value = getAllUsers[i][a][k]
            }
        }
    }

}