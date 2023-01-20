import React, { useContext, useState } from 'react'
import { UserContext } from './UserContext'


const Auth = () => {


    const{username,setusername} = useContext(UserContext)

    const [input, setinput] = useState('')


  return (
    <div>
        <h2>COntext test</h2>

        <input onChange={e=>setinput(e.target.value)}></input>
        <button onClick={()=>setusername(input)}> submit</button>


    </div>
  )
}

export default Auth