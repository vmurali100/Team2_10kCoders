function viewDetails(i) {
    console.log(todoActivites[i]);
    localStorage.setItem('todoActivites', JSON.stringify(todoActivites));
    window.location.href = 'details.html?' + todoActivites[i].activityId;
  
  }