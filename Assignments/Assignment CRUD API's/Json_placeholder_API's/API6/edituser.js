var index;
function edituser(i) {
  index = i;
  document.getElementById("form_row").style.display = "flex";
  document.getElementById("table_row").style.display = "none";
  for (a in user) {
    if (a !== "address" && a !== "company" && a !== "id") 
    {
      document.getElementById(a).value = users[i][a];
    } 
    else if (a == "address") 
    {
      var geoLoc = users[i][a].geo.lat + "\n" + users[i][a].geo.lng;
      document.getElementById(a).value  =
      users[i][a].street +
        "\n" +
        users[i][a].suite +
        "\n" +
        users[i][a].city +
        "\n" +
        users[i][a].zipcode +
        "\n" +
        geoLoc;
    } 
    else if (a == "company") 
    {
      document.getElementById(a).value  =
      users[i][a].name + "\n" + users[i][a].catchPhrase + "\n" + users[i][a].bs;
    }
  }
}
