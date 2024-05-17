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
        <lable className='lable_logi'>Password</lable>
        <input placeholder='Enter password'className='inputfield' onChange={(e)=>setpassword(e.target.value)}></input><br></br>
        <button type="submit"className='button_login'> Login</button>
      </form>
    </div>
    </div>
  )
}
