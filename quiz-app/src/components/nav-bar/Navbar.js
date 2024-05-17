import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { usercontext } from '../authentication/Auth'
import './navbar.css'


export default function Navbar() {
  const loginuser=useContext(usercontext)
  return (
    <div>
      <div className='container_navbar'>
        <div className='logo'><a href='/'>PARTICE QUIZ?</a></div>
      <NavLink to={"/"} className='navlink'>Home</NavLink>
      
      {loginuser.logged &&
      <>
      
      <NavLink to={"/profile"} className='navlink'>profile</NavLink>
      </>
    }
      <NavLink to={"/about"} className='navlink'>About</NavLink>
      <NavLink to={"/singup"} className='navlink'>Singup</NavLink>
      <NavLink to={"/login"} className='navlink'>Login</NavLink>
      </div>
    </div>
  )
}
