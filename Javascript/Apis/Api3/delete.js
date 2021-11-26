function deletePerson(i) {
    users.splice(i, 1);
    localStorage.setItem("data2", JSON.stringify(users))

    display(users);
} 