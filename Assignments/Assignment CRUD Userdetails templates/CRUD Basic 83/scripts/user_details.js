var persons = JSON.parse(localStorage.getItem("temp1persons"));
document.querySelector(".row2").style.overflow = "auto";
      persons.forEach((user,i) => {
        index = i;
         tr = document.createElement("tr");
         tr.setAttribute("id","row"+i);
        var slno = document.createElement("td");
        slno.innerHTML = i+1;
        tr.appendChild(slno);
        for (key in user) {
          var td = document.createElement("td");
          td.innerHTML = user[key];
          td.style.padding = "0px 10px";

          input_td = document.createElement("td");

          var inputbox = document.createElement("input");
          inputbox.setAttribute("type", "text");
          input_td.setAttribute("style","display:none");
          inputbox.innerHTML = user[key];

          input_td.appendChild(inputbox);

          tr.append(td, input_td);
        }
        edit_save = document.createElement("td");

        editbtn = document.createElement("button");
        editbtn.innerHTML = "Edit";
        editbtn.setAttribute("class","btn btn-warning");
        editbtn.setAttribute("onclick","edituser("+i+")");

        savebtn = document.createElement("button");
        savebtn.innerHTML = "Save";
        savebtn.setAttribute("style","display:none");
        savebtn.setAttribute("onclick","saveuser()");


        edit_save.append(editbtn, savebtn);
        tr.appendChild(edit_save);
      
        del = document.createElement("td");
        delbtn = document.createElement("button");
        delbtn.innerHTML = "Delete";
        delbtn.setAttribute("class","btn btn-danger");
        delbtn.setAttribute("onclick","deletePerson("+i+")");
        del.appendChild(delbtn);
        tr.appendChild(del);
        document.querySelector("tbody").append(tr);

    })
    function edituser(i){
        console.log("index value in edituser()",i);
        for(var j=0;j<(tr(i).childElementCount);j++)
        {
            console.log("i am in for loop...")
            tr[i].childNode[j].style.display = "block";
            console.log("tr: ", tr[i]);
            console.log("td: " ,tr[i].childNode[j])
        }
        
        savebtn.style.display = "block";
        editbtn.style.display = "none";

    
        
        // save.setAttribute("disabled",true);
        // index = i;
        // for( a in user){
        //     document.getElementById(a).value = users[i][a];
        // }
    
        // document.getElementById("Save").style.display = "block";
        // document.getElementById("Edit").style.display = "none";
    }

    
