function deletePerson(i){
    console.log(users);
    users.splice(i,1);
    console.log(users);
    display();
    localStorage.setItem("temp1persons",JSON.stringify(users));
}