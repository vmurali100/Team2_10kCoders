function deletePerson(i) {
    users.splice(i, 1);
    localStorage.setItem("data55", JSON.stringify(users))
    if (data == 0) {
        localStorage.clear()
        getData()
    }
    display(users);
}