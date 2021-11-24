function deletePerson(i) {
    users.splice(i, 1);
    localStorage.setItem("data3", JSON.stringify(users))
    // if (data == 0) {
    //     localStorage.clear()
    //     getData()
    // }
    display(users);
}