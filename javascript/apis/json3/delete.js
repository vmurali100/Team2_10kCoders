function deleteuser(i){
    json3.splice(i,1);
    localStorage.setItem('json3',JSON.stringify(json3));
    displayUsers();
  }