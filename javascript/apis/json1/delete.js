function deleteuser(i){
    json1.splice(i,1);
    localStorage.setItem('json1',JSON.stringify(json1));
    displayUsers();
  }