function deletePerson(i) {
    console.log('deletePerson called ' + i);
    if (persons.length > 1) {
        persons.splice(i, 1);
    }
    localStorage.setItem('persons', JSON.stringify(persons));
    displayPersons();
}