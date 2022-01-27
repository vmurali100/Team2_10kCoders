// var noteData = [
//     {title:"MYOWNTITLE",note:"WE CAN WRITE ANYTHINH here",noteId:1},
//     {title:"MYOWNTITLE1",note:"ANy othet NOTe",noteId:2},
// ]
// localStorage.setItem("noteData",JSON.stringify(noteData))
var noteData = JSON.parse(localStorage.getItem("noteData"))
var notes = {
    title:"",
    note:"",
    noteId:Number("")
}
function form1(){
    for(a in notes){
        notes[a] = document.getElementById(a).value
    }
    var noteData1  = JSON.parse(localStorage.getItem("noteData"))
    noteData1.push({...notes})
    localStorage.setItem("noteData",JSON.stringify(noteData1))

}

function getDetails(){
    window.location.href = "display.html"
}

var url = window.location.href
console.log(url)
var id = url.substr(url.length-1)
noteData.forEach((notes1)=>{
    if(notes1.noteId == id){
        for(a in notes1){
            document.getElementById(a).value = notes1[a]
        }
        document.getElementById("submit").style.display = "none"
        document.getElementById("update").style.display = "block"
    }
})
function updateNotes(){
    var notes2 = {...noteData[id-1]}
    for(a in notes2){
        notes2[a] = document.getElementById(a).value
    }
    var noteData2 = JSON.parse(localStorage.getItem("noteData"))
    noteData2[id-1] = {...notes2}
    localStorage.setItem("noteData",JSON.stringify(noteData2))
    document.getElementById("update").style.display = "none"
    document.getElementById("submit").style.display="block"
    window.location.href="http://127.0.0.1:5500/NOTE%20TAKING%20APP/display.html"
}