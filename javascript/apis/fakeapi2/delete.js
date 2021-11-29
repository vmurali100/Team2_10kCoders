function deleteuser(i){
    fakeapi2.splice(i,1);
    localStorage.setItem('fakeapi2',JSON.stringify(fakeapi2));
    displayUsers();
  }