function deleteuser(i){
    json6.splice(i,1);
    localStorage.setItem('json6',JSON.stringify(json6));
    displayUsers();
  }