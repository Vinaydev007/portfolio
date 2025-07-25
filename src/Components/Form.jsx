import React from 'react'
import "../Components/Form.css"
import {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
function Form() {
    const [input,setinput]=useState("")
    const [submit,setsubmit]=useState("")
    const notify = () => toast("Wow so easy!");
    const Handlechange=(e)=>{
      setinput(e.target.value)
    }
    const HandleSubmit=(event)=>{
         event.preventDefault();
        setsubmit(input)
        setinput("")
        notify()
    }
  return (
    <div className='Form'>
        <ToastContainer />
        <form onSubmit={HandleSubmit}>
        <h1 style={{textAlign:"center"}}>{submit}</h1>
        <input type="text" onChange={Handlechange} value={input}/>
        <button type='submit'>Submit</button>
        </form>
        </div>
  )
}

export default Form