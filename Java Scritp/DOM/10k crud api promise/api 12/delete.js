function deletePerson(i) {
    users.splice(i, 1);
    localStorage.setItem("data12", JSON.stringify(users))
    display(users);
}