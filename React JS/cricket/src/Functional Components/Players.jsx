import React,{useState} from 'react'
export const Players =(props)=>{
    return <div>
          {props.allPlayer.map((game)=>{
              <p>{game}</p>
          })}
    </div>
}