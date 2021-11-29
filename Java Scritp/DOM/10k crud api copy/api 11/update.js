function updatePerson() {
    for (a in person) {
        person[a] = document.getElementById(a).value;
    }
    users[index] = { ...person }
    localStorage.setItem("data11", JSON.stringify(users))
    display(users);
    clear();
    console.log("hideeeeeeeeeee", users)
}