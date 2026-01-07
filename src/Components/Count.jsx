import React from 'react'
import { useState } from 'react'

const Count = () => {
    const[count,setcount]=useState(0)
  return (
    <div>
        <button onMouseDown={()=>{
            
            setcount(count-1);
        }}
        >-</button>
        <p>{count}</p>
        <button 
        onMouseDown={()=>{
            setcount(count+1)
        }}>+</button>
    </div>
  )
}

export default Count