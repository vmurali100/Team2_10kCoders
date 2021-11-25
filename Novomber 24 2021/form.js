var user1  = {
    ID:Number(""),
    title:"",
    price:"",
    description:"",
    category:"",
    Rating:"",
    }
function form1(){
    for(a in user1){
       document.getElementById(a).value = user1[a]
    }
    data.push({...user1})
    console.log(data)
}