function deletePerson(i) {
    users.splice(i, 1);
    localStorage.setItem("data11", JSON.stringify(users))
    display(users);
}