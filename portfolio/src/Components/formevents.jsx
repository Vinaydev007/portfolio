import React from 'react'
import Props from "./props"
import {useState} from 'react'
function Formevents({setSubmitval }) {
    const [input,setInput]=useState("")

 const handlechange=(e)=>{
     setInput(e.target.value)
    }

 const handlesubmit=(e)=>{
    e.preventDefault()
    setSubmitval(input)
    setInput()
 }
  return (
    <div>
        <form onSubmit={handlesubmit}><input type="text" placeholder='enter the color' value={input} onChange={handlechange} />
    <button type="submit">Submit</button>
    </form>
  </div>
  )
}

export default Formevents