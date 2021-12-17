// let todoActivities = [
//     { activity: "Job Support", status: "completed", activityId: 1 },
//     { activity: "10k Course", status: "In Progress", activityId: 2 },
//     { activity: "Watching Akhanda", status: "yet to watch", activityId: 3 },
//     { activity: "watching puspha trailler", status: "In Progress", activityId: 4 }
// ]
var todoActivities = []
function display() {
    document.querySelector('tbody').innerHTML = ""
    todoActivities = JSON.parse(localStorage.getItem("todoActivities"))
    todoActivities.forEach((todo, i) => {

        var myTr = document.createElement("tr")
        for (a in todo) {
            if (a !== "activityId") {
                var myTd = document.createElement("td")
                myTd.innerHTML = todo[a]
                myTr.appendChild(myTd)
            }
        }

        var actionTd = document.createElement("td")
        var viewDetailsBtn = document.createElement("button")
        viewDetailsBtn.setAttribute("onclick", "viewDetails(" + i + ")")
        viewDetailsBtn.innerHTML = "View Details"
        actionTd.appendChild(viewDetailsBtn)


        var deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = "Delete"
        deleteBtn.setAttribute("onclick", "deleteActivity(" + i + ")")
        actionTd.appendChild(deleteBtn)
        myTr.appendChild(actionTd)
        document.querySelector('tbody').appendChild(myTr)
    })
}

//view Details

function viewDetails(i) {
    localStorage.setItem("todoActivities", JSON.stringify(todoActivities))
    window.location.href = "details.html?" + todoActivities[i].activityId;
}


function deleteActivity(i) {
    todoActivities.splice(i, 1);
    localStorage.setItem("todoActivities", JSON.stringify(todoActivities))
    display()
}
display();
