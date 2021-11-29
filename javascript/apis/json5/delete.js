function deleteuser(i){
    json5.splice(i,1);
    localStorage.setItem('json5',JSON.stringify(json5));
    displayUsers();
  }