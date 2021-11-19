function validate() {
  var formvalid = true;
  for (a in person) {
    let userInput = document.getElementById(a).value;
    if (a !== 'email') {
      if (userInput.length == 0) {
        formvalid = false;
      }
    } else {
      var emailPattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!emailPattern.test(userInput)) {
        formvalid = false;
      }
    }
  }

  if (formvalid) {
    document.querySelector('button').removeAttribute('disabled');
  } else {
    document.querySelector('button').setAttribute('disabled', true);
  }
}
