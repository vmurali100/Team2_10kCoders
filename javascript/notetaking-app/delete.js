function deleteActivity(i) {
    console.log('deletePerson called ' + i);
    todoActivites.splice(i, 1);
    localStorage.setItem('todoActivites', JSON.stringify(todoActivites));
    displayActivites();
  }
 