import React,{useState} from 'react'
import { Players } from './Players'
export const Game =()=>{
    const[game,setgame]=useState(['Hari','Giri','Somu','Rachana'])
    return <div>
      <Players allPlayers={game}/>
    </div>
}