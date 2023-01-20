import {useState } from 'react';
import './App.css';
import { UserContext } from './UserContext';
import Header from './Header';
import Auth from './Auth';

function App() {

  const [username,setusername] = useState('user')

 
  return (
    <div className="App">
      
    <UserContext.Provider value ={{username,setusername}} >
      <p>WWWWWW</p>
        <Header/>
        <Auth/>
    </UserContext.Provider>
    </div>
  );
}

export default App;
