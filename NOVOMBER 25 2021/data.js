function getData(){
    let data={
        title:"",
        email:""
    }
    for(a in data){
        data[a]=document.getElementById(a).value
    }
    
    data['gender']=" "
    var gens = document.getElementsByName('gender')
    gens.forEach((gen)=>{
        
        if(gen.checked){
         data.gender+=gen.value
        }
    })

    data['subjects']=[]
    var subs = document.getElementsByName("subjects")
    subs.forEach((subject)=>{
        if(subject.checked){
            data['subjects'].push(subject.value)
        }
    })
console.log(data)
   
}