function deletePerson(i) {
    users.splice(i, 1);
    localStorage.setItem("data5", JSON.stringify(users))
        display(users);
} 