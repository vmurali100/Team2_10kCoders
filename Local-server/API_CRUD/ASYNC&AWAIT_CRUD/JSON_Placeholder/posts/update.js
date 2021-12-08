function handleUpdate(data) {
  return new Promise((done) => {
    var UPDATE_URL = USER_URL + data.id;
    var fillText = new XMLHttpRequest();
    fillText.open("PUT", UPDATE_URL);
    fillText.setRequestHeader("content-type", "application/json");
    fillText.send(JSON.stringify(data));
    fillText.onreadystatechange = function () {
      if (fillText.readyState == 4 && fillText.status == 200) {
        datas[index] = { ...data };
         console.log(datas);
        done();
      }
    };
  });
}

async function upDate() {
  var data = { ...datas[index] };
  for (a in data) {
    data[a] = document.getElementById(a).value;
  }
  var hero = await handleUpdate(data);
  getData();
  document.getElementById("table_row").style.display = "block";
  document.getElementById("form_row").style.display = "none";
}
