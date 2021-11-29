function deletePerson(i) {
    users.splice(i, 1);
    localStorage.setItem("data3", JSON.stringify(users))
    if (!data3) {
        localStorage.clear()
        getData()
    }
    display(users);
}