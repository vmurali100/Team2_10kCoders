
var todoActivites = JSON.parse(localStorage.getItem('todoActivites'))

  function displayActivites() {
    document.querySelector('tbody').innerHTML = '';
  todoActivites.forEach((todo, i) => {
    var myTr = document.createElement('tr');
    var indextd = document.createElement('td');
    indextd.innerHTML = i + 1;
    myTr.appendChild(indextd);
    for (a in todo) {
     
        var myTd = document.createElement('td');
        myTd.innerHTML = todo[a];
        myTr.appendChild(myTd);
    }
  

  var actionTd = document.createElement('td');
  var detailsBtn = document.createElement('button');
  detailsBtn.setAttribute('class', 'btn btn-warning');
  detailsBtn.innerHTML = 'edit';
  detailsBtn.setAttribute('onclick', 'viewDetails(' + i + ')');
  actionTd.appendChild(detailsBtn);
  myTr.appendChild(actionTd);


 
  var deletetd = document.createElement('td');
  var deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'btn btn-danger');
  deleteBtn.setAttribute('onclick', 'deleteActivity(' + i + ')');
  deleteBtn.innerHTML = 'Delete';
  deletetd.appendChild(deleteBtn);
  myTr.appendChild(deletetd);

  document.querySelector('tbody').appendChild(myTr);
});
  }

displayActivites()