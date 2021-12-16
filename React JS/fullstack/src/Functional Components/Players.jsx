import React,{useState} from 'react'
export const Players=()=>{
    const[players,setplayers]=useState({
        'name':'MS Dhoni',
        'id':777,
        'designation':'captain',
        'matches':220
    })
    const removeProperty=(play)=>{
        var newPlayer={...players}
        delete newPlayer[play]
        setplayers(newPlayer)
    }
    return <div>
        <ul>
            {Object.keys(players).map((play)=>{
                return <h4 onClick={()=>{removeProperty(play)}}>{play}:{players[play]}</h4>
            })}
            {Object.keys(players).length===0 && <h2 style={{color:'red'}}>Object is Completely Deleted</h2>}
        </ul>
    </div>
}