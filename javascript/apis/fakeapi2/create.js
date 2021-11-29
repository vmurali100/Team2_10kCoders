var person={
    id="",
    userId:"",
    date:"",
    __v:""
    }
var fakeapi2=JSON.parse(localStorage.getItem("fakeapi2"));
function create(){
    for(a in person){
        person[a]=document.getElementById(a).value
    }
    fakeapi2.push({...person})
    localStorage.setItem("fakeapi2",JSON.stringify(fakeapi2))
    displayUsers()
}