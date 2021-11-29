function deleteuser(i){
    json2.splice(i,1);
    localStorage.setItem('json2',JSON.stringify(json2));
    displayUsers();
  }