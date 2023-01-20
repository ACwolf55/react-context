import React,{useContext} from 'react'
import { UserContext } from './UserContext'

const Header = () => {

    const {username} = useContext(UserContext)


  return (
    <header>
            <h1>Welcome {username}</h1>


    </header>
  )
}

export default Header