function deletePerson(i) {
    console.log('deletePerson called ' + i);
    //if we don't want to delete 0 index 
    // if (persons.length > 1) {
    //     persons.splice(i, 1);
    // }
    persons.splice(i, 1);
    localStorage.setItem('persons', JSON.stringify(persons));
    displayPersons();
}