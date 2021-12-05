function deleteuser(i){
    fakeapi1.splice(i,1);
    localStorage.setItem('fakeapi1',JSON.stringify(fakeapi1));
    displayUsers();
  }