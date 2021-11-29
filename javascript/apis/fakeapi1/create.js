var person={
    id:"",
    title:"",
    price:"",
    description:"",
    category:"",
    image:""
    }
var fakeapi1=JSON.parse(localStorage.getItem("fakeapi1"));
function create(){
    for(a in person){
        person[a]=document.getElementById(a).value
    }
    fakeapi1.push({...person})
    localStorage.setItem("fakeapi1",JSON.stringify(fakeapi1))
    displayUsers()
}