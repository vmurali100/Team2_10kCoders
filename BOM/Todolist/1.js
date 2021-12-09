// let activitylist = [
//     {
//         activity: "to wake up early",
//         status: 'not completed',
//         activityId: 0
//     },
//     {
//         activity: 'to attend class',
//         satus: 'complated',
//         activityId: 1
//     },
//     {
//         activity: 'to complete task',
//         satus: 'complated',
//         activityId: 2
//     },
//     {
//         activity: 'updating task',
//         satus: 'complated',
//         activityId: 3
//     }
// ]
var activitylist = JSON.parse(localStorage.getItem("activitylist"))
activitylist.forEach((todo, i) => {
    var myTr = document.createElement("tr")
    for (a in todo) {
        if (a !== "activityId") {
            var myTd = document.createElement('td')
            myTd.innerHTML = todo[a]
            myTr.appendChild(myTd)
        }
    }
    var actiontd = document.createElement('td')
    var detailsbtn = document.createElement('button')
    detailsbtn.innerHTML = "check details"
    detailsbtn.setAttribute("onClick", "viewDetails(" + i + ")")
    actiontd.appendChild(detailsbtn)

    var deletetd = document.createElement('td')
    var deletebtn = document.createElement('button')
    deletebtn.innerHTML = "delete"
    deletetd.appendChild(deletebtn)

    myTr.appendChild(deletetd)
    myTr.appendChild(actiontd)
    document.querySelector('tbody').appendChild(myTr)
})
function setAsDone() {

}
function viewDetails(i) {
    console.log(activitylist[i])
    localStorage.setItem("activitylist", JSON.stringify(activitylist))
    window.location.href = 'details.html?' + activitylist[i].activityId
}