function deletePerson(i) {
    users.splice(i, 1);
    localStorage.setItem("data10", JSON.stringify(users))
    
    display(users);
}