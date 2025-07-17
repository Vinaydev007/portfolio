import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Props from "./Components/props"
import Formevents from "./Components/formevents"

const details={
  Name:"vinay",
  Age:"23",
  Place:"Hyderabad"
}

function App() {
  const [submitval,setSubmitval]=useState("")
  return (
    <div className="App">
      <Props info={details} color={submitval}/>

    <Formevents setSubmitval={setSubmitval}/>
     
    </div>
  );
}

export default App;
