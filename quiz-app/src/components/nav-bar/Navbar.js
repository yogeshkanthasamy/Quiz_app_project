import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { usercontext } from '../authentication/Auth'



export default function Navbar() {
  const loginuser=useContext(usercontext)
  return (
    <div>
      <Navbar>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={""}></NavLink>
      {loginuser.logged &&
      <>
      
      <NavLink to={"/profile"}>profile</NavLink>
      </>
    }
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/singup"}>Singup</NavLink>
      <NavLink to={"/login"}>Login</NavLink>
      </Navbar>
    </div>
  )
}
