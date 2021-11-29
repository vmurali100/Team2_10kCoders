      // delete elements 
      function deleteElement(i){
        // var  employee  = {
        //         email :"" ,
        //         firstName: "",
        //         userName : "" ,
        //     }
        all.splice(i,1);
        localStorage.setItem("newall" ,JSON.stringify(all));
        if(getinfo == 0){
          localStorage.clear();
          getData();
        }

        displayElements(all);
        // console.log("clicked value to delete " + i);
    }