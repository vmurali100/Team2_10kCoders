function deleteuser(i){
    json4.splice(i,1);
    localStorage.setItem('json4',JSON.stringify(json4));
    displayUsers();
  }