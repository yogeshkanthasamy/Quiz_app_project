import React, { useState } from 'react'

export const usercontext=React.createContext()
export default function Auth(props) {
    const[logged,setlogged]=useState(false)
    const[loginemail,setloginemail]=useState()
    const login=()=>{
       setlogged(!logged)
    }
    const loggedemail=(value)=>{
        setloginemail(value)
    }
  return (
    <div>
      <usercontext.Provider value={{login,logged,loggedemail,loginemail}}>
        {props.children}
      </usercontext.Provider>
    </div>
  )
}
