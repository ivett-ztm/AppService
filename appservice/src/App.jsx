import './App.css'
import Login from '../views/Login'
import Bienvenido from '../views/prueba';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState([])
  return (
    <>
    {
      user.length === 0
      ? <Login setUser={setUser} />
      : <Bienvenido user={user} setUser={setUser} />
    }
    </>
  )
}

export default App;

