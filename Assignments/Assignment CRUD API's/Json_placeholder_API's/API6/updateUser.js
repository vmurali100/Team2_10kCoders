function updateUser(){
    i = index;
    // for(a in user)
    // {
    //     user[a] = document.getElementById(a).value;
    // }

    for (a in user) {
        if (a !== "address" && a !== "company" && a !== "id") 
        {
            user[a] = document.getElementById(a).value;
        } 
        else if (a == "address") 
        {
            fullAddress = document.getElementById(a).value;
            user[a] = document.getElementById(a).value;
        //   var geoLoc = users[i][a].geo.lat + "\n" + users[i][a].geo.lng;
        //   document.getElementById(a).value  =
        //   users[i][a].street +
        //     "\n" +
        //     users[i][a].suite +
        //     "\n" +
        //     users[i][a].city +
        //     "\n" +
        //     users[i][a].zipcode +
        //     "\n" +
        //     geoLoc;
        } 
        else if (a == "company") 
        {
          document.getElementById(a).value  =
          users[i][a].name + "\n" + users[i][a].catchPhrase + "\n" + users[i][a].bs;
        }
      }

    users[index]={...user};
    // localStorage.setItem("username",JSON.stringify(users));
    document.getElementById("form_row").style.display = "none";
    document.getElementById("table_row").style.display = "flex";
    display();
}