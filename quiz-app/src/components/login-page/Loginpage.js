import React, { useContext } from 'react'

import { usercontext } from '../authentication/Auth'
import './login.css'
export default function Loginpage(){
   <div>
    <div className='container_form'>
      <form className='form'>
        <lable className='lable_logi'>Email</lable>
        <input placeholder='Enter Email' className='inputfield'></input><br></br>
        <lable className='lable_logi'>Password</lable>
        <input placeholder='Enter password'className='inputfield'></input><br></br>
        <button className='button_login'> Login</button>
      </form>
    </div>
   </div>
}
