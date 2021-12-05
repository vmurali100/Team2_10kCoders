function deleteuser(i){
    fakeapi3.splice(i,1);
    localStorage.setItem('fakeapi3',JSON.stringify(fakeapi3));
    displayUsers();
  }