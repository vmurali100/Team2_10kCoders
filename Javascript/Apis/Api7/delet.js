function deletePerson(i) {
    users.splice(i, 1);
    localStorage.setItem("data7", JSON.stringify(users))
    display(users);
} 