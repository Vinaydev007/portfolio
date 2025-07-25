import React from "react";
import AdminRegister from "./Components/hospital/admin";
import DoctorRegister from "./Components/hospital/doctor";
import PatientRegister from "./Components/hospital/user";
import Uncontrolled from "./Components/uncontrolled"
import {useState} from "react"
import Form from "./Components/Form"

function App() {
  const [submitval,setSubmitval]=useState("")
  return (
    <div>
      <h1>Hospital System</h1>
      {/* <AdminRegister /> */}
      {/* <DoctorRegister /> */}
      {/* <PatientRegister /> */}
      <Uncontrolled/>
      <Form/>
    </div>
  );
}

export default App;

