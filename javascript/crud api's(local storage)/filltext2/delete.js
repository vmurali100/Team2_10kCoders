function deleteuser(i){
    filltext2.splice(i,1);
    localStorage.setItem('filltext2',JSON.stringify(filltext2));
    displayUsers();
  }