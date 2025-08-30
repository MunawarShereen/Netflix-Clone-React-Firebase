import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'

const App = () => {

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        console.log('User is signed in:', user);
        navigate('/');
      } else {
        // User is signed out
        console.log('User is signed out');
        navigate('/login');
      }
    }
    );
    }, []);
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/player/:id' element={<Player/>} />
      </Routes>

    </div>
  )
}

export default App