function deleteElement(i){
    var  employee  = {
            email :"" ,
            firstName: "",
            userName : "" ,
        }
    all.splice(i,1);
    localStorage.setItem("akhil" ,JSON.stringify(all[i]));
    deleteElement();
    console.log("clicked value to delete " + i);
}