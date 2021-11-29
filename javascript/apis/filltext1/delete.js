function deleteuser(i){
    filltext1.splice(i,1);
    localStorage.setItem('filltext1',JSON.stringify(filltext1));
    displayUsers();
  }