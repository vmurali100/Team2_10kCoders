
function createactivity() {
for (a in activi) {
    activi[a] = document.getElementById(a).value;
  }
  todoActivites.push({ ...activi });
  var convertedtodoActivites = JSON.stringify(todoActivites);
  localStorage.setItem('todoActivites', convertedtodoActivites);
  displayActivites();
}