var index;
function editPerson(i) {
    index = i;
    for (a in getAllData[i]) {
        if (a !== "address" && a !== "__v") {
            document.getElementById(a).value = getAllData[i][a];
        }
    }

}