// let todoActivites = [
//   {
//     activity: 'JOB Support for USA candidate',
//     status: 'completed',
//     activityId: 1,
//   },
//   { activity: '10k Training', status: 'IN progress', activityId: 2 },
//   { activity: 'Watching Akhanda', status: 'Yet To start', activityId: 3 },
//   {
//     activity: 'Watching Pushpa Trailer',
//     status: 'Yet To Start',
//     activityId: 4,
//   },
// ];

var todoActivites = JSON.parse(localStorage.getItem('todoActivites'));

todoActivites.forEach((todo, i) => {
  var myTr = document.createElement('tr');
  for (a in todo) {
    if (a !== 'activityId') {
      var myTd = document.createElement('td');
      myTd.innerHTML = todo[a];
      myTr.appendChild(myTd);
    }
  }

  var actionTd = document.createElement('td');
  var detailsBtn = document.createElement('button');
  detailsBtn.innerHTML = 'View Details';
  detailsBtn.setAttribute('onclick', 'viewDetails(' + i + ')');
  actionTd.appendChild(detailsBtn);

  var deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = 'DELETE';
  deleteBtn.setAttribute('onclick', 'deleteActivity(' + i + ')');
  actionTd.appendChild(deleteBtn);

  myTr.appendChild(actionTd);
  var deleteTd = document.createElement('td');
  document.querySelector('tbody').appendChild(myTr);
});

function markAsDone() {}

function viewDetails(i) {
  console.log(todoActivites[i]);
  localStorage.setItem('todoActivites', JSON.stringify(todoActivites));
  window.location.href = 'details.html?' + todoActivites[i].activityId;
}
function deleteActivity(i){
  console.log(todoActivites[i])
  todoActivites.splice(i,1)
}

