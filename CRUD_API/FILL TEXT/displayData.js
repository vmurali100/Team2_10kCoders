function displayAllData() {
    console.log("display function")
    allData.forEach((user, i) => {
        var myTr = document.createElement("tr");

        for (a in user) {
            var myTd = document.createElement("td");
            myTd.innerHTML = user[a];
            myTr.appendChild(myTd)
        }

        // Edit
        var editTd = document.createElement("td");
        var editBtn = document.createElement("button");
        editBtn.innerHTML = "EDIT";
         editBtn.setAttribute("class" , "btn btn-warning")
         editBtn.setAttribute("onclick" , "editUser("+ i +")")
        editTd.appendChild(editBtn);
        myTr.appendChild(editTd);


        // Delete
        var delTd = document.createElement("td");
        var delBtn = document.createElement("button");
        delBtn.innerHTML = "DELETE";
         delBtn.setAttribute("class","btn btn-danger")
         delBtn.setAttribute("onclick", "deleteUser("+ i +")")
        delTd.appendChild(delBtn)
        myTr.appendChild(delTd)


        document.querySelector("tbody").appendChild(myTr)
    })
}




