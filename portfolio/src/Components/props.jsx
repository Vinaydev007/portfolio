import React from 'react'
import { useState,useEffect } from 'react'

function Props({info,color}) {
    console.log(info,color)
    const[value,setValue]=useState("blue")
    useEffect(()=>{
        if(value=="red"){
         setTimeout(()=>{setValue("blue")},1000)  
        }
        else if(value=="blue"){
            setTimeout(()=>{setValue("green")},3000)   
        }
    },[value])
  return (
    <div>
        <h1 style={{color:color}}>{info.Name}</h1>
        <h2>{info.Age}</h2>
        <h3>{info.Place}</h3>
        
    </div>
  )
}

export default Props