function handleDelete(i) {
  return new Promise((done) => {
    var DEL_URL = USER_URL + datas[i].id;
    var getinfo = new XMLHttpRequest();
    getinfo.open("DELETE", DEL_URL);
    getinfo.send();
    getinfo.onreadystatechange = function () {
      if (getinfo.readyState == 4 && getinfo.status == 200) {
        data = JSON.parse(getinfo.response);
        console.log(datas);
        done();
      }
    };
  });
}

async function deleteElement(i) {
  var hero = await handleDelete(i);
  getData();
}
