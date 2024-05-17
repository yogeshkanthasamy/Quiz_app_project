import React, { useState } from 'react'
import './login.css'
export default function Userloginpage() {
    const [email,setemail]=useState()
    const [password,setpassword]=useState()
    const handlesubmit=(e)=>{
       e.preventDefault();
    }

  return (
    <div>
     <div className='container_form' onSubmit={handlesubmit}>
      <form className='form'>
        <lable className='lable_logi'>Email</lable>
        <input placeholder='Enter Email' className='inputfield' onChange={(e)=>setemail(e.target.value)}></input><br></br>
        <lable 