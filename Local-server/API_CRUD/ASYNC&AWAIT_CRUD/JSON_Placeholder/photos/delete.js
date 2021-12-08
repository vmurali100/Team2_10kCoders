function handleDelete(i) {
  return new Promise((done) => {
    var DELETE_URL = USER_URL + datas[i].id;
    var fillText = new XMLHttpRequest();
    fillText.open("DELETE", DELETE_URL);
    fillText.send();
     fillText.onreadystatechange = function () {
      if (fillText.readyState == 4 && fillText.status == 200) {
        var data = fillText.response;
        console.log(datas)
        done();
      }
    };
  });
}
 async function deleteElement(i){
   var hero = await handleDelete(i);
   getData();

 }
