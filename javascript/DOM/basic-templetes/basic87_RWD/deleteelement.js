function deleteElement(i){
    var  employee  = {
            email :"" ,
            firstName: "",
            userName : "" ,
        }
    all.splice(i,1);
    localStorage.setItem("akhi" ,JSON.stringify(all));
    displayElements();
    // console.log("clicked value to delete " + i);
}