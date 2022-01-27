var noteData = JSON.parse(localStorage.getItem("noteData"))
if(!noteData){
    noteData = []
}
    var data = {
        title:"",
        note:"",
        noteId:Number("")
    }
    function form1(){
        for(a in data){
            data[a] = document.getElementById(a).value
        }
        noteData.push({...data})
        localStorage.setItem("noteData",JSON.stringify(noteData))
        clear()
    }
    function getDetails(){
        window.location.href = "display.html"
    }
   function clear(){
       for(a in data){
           document.getElementById(a).value=" "
       }
   }