function deleteuser(i){
    filltext3.splice(i,1);
    localStorage.setItem('filltext3',JSON.stringify(filltext3));
    displayUsers();
  }