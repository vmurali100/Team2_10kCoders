function deleteElement(i){
   
    all.splice(i,1);
    localStorage.setItem("newall" ,JSON.stringify(all));
    if(data == 0){
      localStorage.clear();
      getData();
    }

    displayElements(all);
   
}