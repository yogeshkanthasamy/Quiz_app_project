import React, { useState } from 'react'
import './singup.css'
export default function Singup() {
  const[name,setname]=useState()
  const[email,setemail]=useState()
  const[password,setpassword]=useState()
  const[repass,setrepass]=useState()
   const handlesubmit=(e)=>{
      e.preventDefault();
   }
  return (
    <div>
      <div className='container_singup' onSubmit={handlesubmit}>
        <form className='form_singup'>
          <label className='label_singup'>Name</label>
          <input className='singup_input' placeholder='Enter your name'onChange={(e)=>setname(e.target.value)}></input><br></br>
          <label className='label_singup'>Email</label>
          <input className='singup_input' placeholder='Enter your email'onChange={(e)=>setemail(e.target.value)}></input><br></br>
          <lable className='label_singup'>Password</lable>
          <input  className='singup_input' placeholder='Enter your password'onChange={(e)=>setpassword(e.target.value)}></input><br></br>
          <lable className='label_singup'>Renter Password</lable>
          <input  className='singup_input' placeholder='Enter your Renter password'onChange={(e)=>setrepass(e.target.value)}></input><br></br>
          <button type='submit' className='singup_btn'>Singup</button>
        </form>
      </div>
    </div>
  )
}
