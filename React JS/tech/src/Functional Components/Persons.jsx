import react,{useState} from 'react'
export const Persons =()=>{
    const [persons,setpersons]=useState(['Bheem','Rani','Mamatha','Rachana'])
    return <div>
        <ul>
            {persons.map((per)=>{
                return <h2 style={{color:'blue'}}>{per}</h2>
            })}
        </ul>
    </div>
}